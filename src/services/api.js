import httpClient from "./axios";

class Api {
  constructor() {
    this.baseUrl = process.env.REACT_APP_API_URL;
    this.apiKey = process.env.REACT_APP_API_KEY;
  }

  get(url, data) {
    return httpClient.get(this.getUrl(url, data)).then((res) => res.json());
  }

  getUrl(path, params) {
    const url = new URL(`${this.baseUrl}${path}`);
    params = { ...params, apiid: this.apiKey };
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );
    return url;
  }
}

export default Api();
