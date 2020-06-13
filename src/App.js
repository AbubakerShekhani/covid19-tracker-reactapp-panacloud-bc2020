import React, { useEffect, useState } from 'react';
import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchSummaryData } from './api'

function App() {
  const [isFetching, setFetching] = useState(false)
  const [data, setData ] = useState([])

  useEffect(() => {
    (async function() {
      setFetching(true)
      setData(await fetchSummaryData())
      setFetching(false)
    })();

  }, [])

  return (
    <div className={styles.container}>

        <h1>Abubaker</h1>

          { console.log(data) }

        <CountryPicker />

  { isFetching ? <div>Loading...</div>: <Cards summaryData = {data} /> }

        <Chart />
    </div>
  );
}

export default App;
