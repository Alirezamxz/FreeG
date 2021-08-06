import axios from "axios";

const api = axios.create({ baseURL: "https://www.freetogame.com/api" });

const { get, post } = api;

export { get, post };
