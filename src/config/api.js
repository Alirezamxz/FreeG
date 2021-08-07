import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_API_TOKEN,
  },
});

const { get, post } = api;

export { get, post };
