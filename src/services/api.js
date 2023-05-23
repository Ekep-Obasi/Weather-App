/* eslint-disable import/no-anonymous-default-export */
import httpClient from "./axios";

class Api {
  constructor() {
    this.apiKey = process.env.REACT_APP_API_KEY;
  }

  get(path, params) {
    return httpClient.get(path, { params: { ...params, appid: this.apiKey } });
  }
}

export default new Api();
