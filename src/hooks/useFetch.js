/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import getLocation from "../utlils/location";
import { getCurrentWeather, getForeCast } from "../services/data.repo";

const useFetch = () => {
  const [dailyWeather, setDailyWeather] = useState({ name: "" });
  const [location, setLocation] = useState({ lat: "", lon: "" });
  const [foreCast, setForeCast] = useState([]);
  const [mapData, setMapData] = useState([]);

  useEffect(() => {
    getLocation().then((res) => setLocation(res));

    getCurrentWeather({ lat: location?.lat, lon: location?.lng }).then((res) =>
      setDailyWeather(res)
    );
    getForeCast({ lat: location?.lat, lon: location?.lng }).then((res) => {
      setMapData(res[0]);
      setForeCast(res[1]);
    });
  }, [location.lat, location.lon, dailyWeather.name]);

  return {
    dailyWeather,
    location,
    setLocation,
    foreCast,
    setForeCast,
    mapData,
  };
};

export default useFetch;
