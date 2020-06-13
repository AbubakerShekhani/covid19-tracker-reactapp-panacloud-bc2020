import React from 'react'
import CountUp from 'react-countup';

const Cards = ({summaryData}) => {

  const { confirmed, recovered, deaths, lastUpdate } = summaryData;

  if (!confirmed) {
    return 'Loading...';
  } else {
    console.log(summaryData)
  }

  return (
    <div>
    <h1>Cards</h1>
    <p>Total Confirmed: <CountUp start={0} end={confirmed.value} duration={1.5} separator="," /></p>
    <p>Total Recovered: <CountUp start={0} end={recovered.value} duration={1.5} separator="," /></p>
    <p>Total Deaths: <CountUp start={0} end={deaths.value} duration={1.5} separator="," /></p>
    <p>Last Updated: {new Date(lastUpdate).toDateString()}</p>
    </div>
  )
}

export default Cards