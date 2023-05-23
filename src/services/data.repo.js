/* eslint-disable no-unused-expressions */
import { getDate, getDay, getTime, localTime } from "../utlils/date";
import api from "./api";

function getForeCast(params) {
  return api
    .get(`forecast`, params)
    .then((res) => res.data)
    .then((res) => res.list.map(formatWeatherForeCastList))
    .then((res) => groupByDay(res))
    .then((res) => formatForcast(res));
}

function formatWeatherForeCastList({
  dt,
  main,
  weather,
  dt_txt,
  wind,
  visibility,
}) {
  return {
    date: getDate(dt),
    time: getTime(dt),
    day: getDay(dt),
    temp: main.temp,
    weather: weather[0],
    fullTime: dt_txt,
    windSpeed: wind.speed,
    humidity: main.humidity,
    airPressure: main.pressure,
    visibility: visibility,
  };
}

function formatForcast(forecast) {
  const avgWeather = Object.values(forecast).map((day) => {
    const arr = [];
    day.forEach((weather) => {
      if (Date.parse(weather.fullTime) >= Date.parse(localTime()))
        arr.push(weather);
    });
    return arr.pop();
  });
  return [forecast, avgWeather];
}

function groupByDay(forcast) {
  const result = {};
  forcast.forEach((first) => {
    if (!result[first.day]) {
      result[first.day] = [{ ...first }];
    } else {
      result[first.day].push({ ...first });
    }
  });
  return result;
}

function getCurrentWeather(prams) {
  return api
    .get(`weather`, prams)
    .then((res) => res.data)
    .then(formatWeather);
}

function formatWeather({ weather, main, visibility, name, wind, coord }) {
  return {
    ...coord,
    name,
    weather: weather[0],
    temp: main.temp,
    visibility,
    windSpeed: wind.speed,
    humidity: main.humidity,
    pressure: main.pressure,
  };
}

export { getForeCast, getCurrentWeather };
