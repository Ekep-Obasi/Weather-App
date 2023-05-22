import axios from "axios";

const httpClient = axios.create({
  BaseUrl: process.env.REACT_APP_API_URL,
});

export default httpClient;
