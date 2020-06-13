import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../../api';
import { Bar, Line } from 'react-chartjs-2'
import styles from './Chart.module.css'

const Chart = (props) => {

  const country     = props.country
  const { confirmed, recovered, deaths } = props.data

  console.log("Props")

  //const summaryData = props.data

  const [dailyStatisticsData, setdailyStatisticsData] = useState({})

  useEffect(() => {
    const fetchDailyDataFromAPI = async () =>
    {
      const initialDailyData = await fetchDailyData()
      setdailyStatisticsData(initialDailyData)
    }

    fetchDailyDataFromAPI()
  }, [])

  //console.log(`${country} from props from state`);
  //console.log("Data for charts data")
  //console.log(dailyStatisticsData)



  const lineChart = (
    dailyStatisticsData[0] ? (
      <Line
        data={{
          labels: dailyStatisticsData.map(( { date }) => date ),
          datasets:[{
            data: dailyStatisticsData.map((data) => data.confirmed),
            label: 'Infected Cases',
            borderColor: '#333fff',
            fill:true
          }, {
            data: dailyStatisticsData.map((data) => data.deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0,0 0.5)',
            fill: true,
          },
        ],
        }}
      />
    ) :null
    );


  const barChart = (
    confirmed ? (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data: [confirmed.value, recovered.value, deaths.value],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${country}` },
        }}
      />
    ) : null
  );

  return (
    <div className={styles.container}>
      { country ? barChart: lineChart }
    </div>
  )
}

export default Chart