import api from "./api";

function getDailyData(params) {
  return api
    .get(`forecast`, params)
    .then((res) => res.list.map(formatDailyData));
}

function getCurrentWeather(prams) {
  return api
    .get(`weather`, prams)
    .then((res) => res.data)
    .then(formatCurrentWeather);
}

function formatCurrentWeather({ weather, main, visiblity, name, wind }) {
  return {
    name,
    weather: weather[0],
    temp: main.temp,
    visiblity,
    wind,
  };
}

function formatDailyData({ dt, weather, main }) {
  return {
    dt,
    weather: weather[0],
    temp: main.temp,
  };
}

export { getDailyData, getCurrentWeather };
