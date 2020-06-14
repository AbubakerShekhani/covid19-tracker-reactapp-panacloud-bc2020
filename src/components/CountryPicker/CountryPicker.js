import React, { useEffect, useState } from 'react'
import { FormControl, NativeSelect, Grid } from '@material-ui/core';
import { fetchCountries } from '../../api/'
import styles from './CountryPicker.module.css';

const Countries = ({handleChangeCountry}) => {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    const fetchCountriesFromAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchCountriesFromAPI();
  }, [])

  return (
    <Grid container spacing={3} sm={12} md={12} justify="center"  >

      <FormControl className={styles.formControl} >
        <NativeSelect defaultValue="" onChange={(e) => handleChangeCountry(e.target.value)}>
          <option value="">World Wide</option>
          {countries.map((country, idx) => <option key={idx} value={country}>{country}</option>)}
        </NativeSelect>
      </FormControl>
    </Grid>
  )
}


export default Countries