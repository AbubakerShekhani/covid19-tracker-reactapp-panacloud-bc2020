import React, { useEffect, useState } from 'react';
import { Cards, Chart } from './components'
import Countries from './components/CountryPicker/CountryPicker'
import styles from './App.module.css'
import { fetchSummaryData, fetchDataByCountry, fetchCountriesDetailedStats } from './api'

function App() {
  const [isFetching, setFetching] = useState(false)
  const [data, setData ] = useState([])
  const [country, setCountry] = useState('')
  const [countryStatsData, setcountryStatsData] = useState([])

  useEffect(() => {
    (async function() {
      setFetching(true)
      setData(await fetchSummaryData())
      setcountryStatsData(await fetchCountriesDetailedStats())
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

    //const countryData12 = countriesData.map(country => country.country)
    //console.log(countryData12)

  }

  return (
    <div>
      <div className={styles.container}>

          <Countries handleChangeCountry={handleChangeCountry}/>

      </div>
      <div className={styles.container}>
          { isFetching ? <div>Loading...</div>: <Cards summaryData = {data} /> }
        </div>
      <div className={styles.container}>
        <Chart data={data} country={country} />
      </div>

    </div>
  );
}

export default App;
