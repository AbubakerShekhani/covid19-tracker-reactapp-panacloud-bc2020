import axios from 'axios'

const baseURL = 'https://covid19.mathdro.id/api'

const baseURL2 = 'https://api.covid19api.com/'

export const fetchSummaryData = async () => {
  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(baseURL)

    const summaryData = { confirmed,recovered, deaths, lastUpdate }

    return summaryData
  } catch (error) {
    return error;
  }
}

export const fetchDataByCountry = async (country) => {

  let countryURL = `${baseURL}/countries/${country}`;

  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(countryURL)
    const summaryData = { confirmed,recovered, deaths, lastUpdate }

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
