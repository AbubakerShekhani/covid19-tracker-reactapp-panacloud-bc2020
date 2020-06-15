import axios from 'axios'

const baseURL = 'https://covid19.mathdro.id/api'


const countriesStatsAPI = 'https://corona.lmao.ninja/v2/countries'

const baseURL2 = 'https://corona.lmao.ninja/v2'

export const fetchSummaryData = async () => {
  try {
    const summaryURL = `${baseURL2}/all`

    const { data: { cases, todayCases, recovered, todayRecovered, active, critical, deaths, updated, affectedCountries } } = await axios.get(summaryURL)

    const summaryData = { confirmed: cases,
                          todayCases: todayCases,
                          recovered: recovered,
                          todayRecovered: todayRecovered,
                          active: active,
                          critical: critical,
                          deaths: deaths,
                          affectedCountries: affectedCountries,
                          lastUpdate: updated }

    return summaryData
  } catch (error) {
    return error;
  }
}

export const fetchDataByCountry = async (country) => {

  let countryURL = `${baseURL2}/countries/${country}`;

  try {
    const { data: { cases, todayCases, recovered, todayRecovered, active, critical, deaths, updated, affectedCountries } } = await axios.get(countryURL)

    const summaryData = {
      confirmed: cases,
      todayCases: todayCases,
      recovered: recovered,
      todayRecovered: todayRecovered,
      active: active,
      critical: critical,
      deaths: deaths,
      affectedCountries: affectedCountries,
      lastUpdate: updated }

    return summaryData

  } catch(err) {
      return err;
  }
}

export const fetchCountries = async() => {
  try {
    const { data: { countries } } = await axios.get(`${baseURL}/countries`);

    return countries.map((country) => country.name);
  } catch(err) {
    return err;
  }
}


export const fetchDailyData = async () => {
  try {

    const { data } = await axios.get(`${baseURL}/daily`);


    return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));

  } catch (error) {
    return error;
  }
};


export const fetchCountriesDetailedStats = async () => {
  try {
    const { data }  = await axios.get(`${countriesStatsAPI}`);

    return data;

  } catch (err) {
    return err
  }
}

