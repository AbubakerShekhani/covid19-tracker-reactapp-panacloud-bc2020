import React, { useEffect, useState } from 'react';
import { Cards, Chart } from './components'
import Countries from './components/CountryPicker/CountryPicker'
import styles from './App.module.css'
import { fetchSummaryData, fetchDataByCountry, fetchAllData } from './api'
import logo from './images/logo.png';
import Flag from './components/Flag/Flag';
import MyMapComponent  from './components/MapsTracker/MapsTracker'

import MyFooter from './components/Footer/MyFooter'
import { Typography } from '@material-ui/core';

const Dashboard = () => {
  const [isFetching, setFetching] = useState(false)
  const [data, setData ] = useState([])
  const [country, setCountry] = useState('')
  const [mapsCountry, setMapsCountry] = useState([])
  //const [countryStatsData, setcountryStatsData] = useState([])

  useEffect(() => {
    (async function() {
      setFetching(true)
      setData(await fetchSummaryData())
      setMapsCountry(await fetchAllData())
      setFetching(false)
    })();
  }, [])




  const handleChangeCountry = async (selectedCountry) => {

    if(selectedCountry) {
      setData(await fetchDataByCountry(selectedCountry))
      setCountry(selectedCountry)
    } else {
      setData(await fetchSummaryData())
      setCountry('')
    }

  }

  /*
  const countryDataForMaps = countryLocation.map((data, idx) => {
    return (<div
      lat = {data.countryInfo.lat}
      lng = {data.countryInfo.long}
      style={{
        color: "red",
        backgroundColor: '#FFF',
        height: "25px",
        width: "35px",
      }}
      >
      {data.cases}
      </div>)
  })*/

  return (
    <div>
      <div className={styles.container}>
        <img className={styles.logo} src={logo} alt="COVID-19" />
        <div className={styles.container}>
          Data Last Updated On: { new Date(data.lastUpdate).toDateString() }
        </div>
        <Countries handleChangeCountry={handleChangeCountry}/>
      </div>


      <div className={styles.container}>
          { country ? <Flag flagURL = {data.flag} /> : '' }

          { isFetching ? <div>Loading...</div>: <Cards summaryData = {data} /> }
        </div>

      <div className={styles.container}>
        <Chart data={data} country={country} />
      </div>

      <div>
        <Typography variant="h2" component="h2" align="center">Global Statistics on Maps</Typography>
        <MyMapComponent countryData={mapsCountry} />
      </div>
      <MyFooter />

    </div>
  );
}

export default Dashboard;
