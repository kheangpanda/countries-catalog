import axios from 'axios';

const BASE_URL = 'https://restcountries.com';

export const fetchGetCountries = async () => {
  const response = await axios.get(BASE_URL+'/v3.1/all');
  return response.data;
};

export const fetchGetCountry = async (id:string) => {
  const response = await axios.get(BASE_URL);
  return response.data;
};
