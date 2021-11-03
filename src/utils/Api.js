import axios from 'axios';


const base_url = "https://www.themealdb.com/api/json/v1/1"


export const Api = axios.create({
  baseURL: base_url,
});


