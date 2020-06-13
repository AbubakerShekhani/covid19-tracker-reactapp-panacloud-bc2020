import axios from 'axios'

const baseURL = 'https://covid19.mathdro.id/api'

export const fetchSummaryData = async () => {
  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(baseURL)

    const summaryData = { confirmed,recovered, deaths, lastUpdate }



    return summaryData
  } catch (error) {

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
