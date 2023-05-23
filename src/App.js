/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { AppProvider } from "./context/app";
import Home from "./pages/Home/Home";
import Theme from "./theme";
import getLocation from "./utlils/location";
import { getCurrentWeather, getForeCast } from "./services/data.repo";

function App() {
  const [dailyWeather, setDailyWeather] = useState({ name: "" });
  const [location, setLocation] = useState({ lat: "", lon: "" });
  const [foreCast, setForeCast] = useState([]);

  useEffect(() => {
    getLocation().then((res) => setLocation(res));
  }, []);
  useEffect(() => {
    getCurrentWeather({ lat: location?.lat, lon: location?.lng }).then((res) =>
      setDailyWeather(res)
    );
    getForeCast({ lat: location?.lat, lon: location?.lng }).then((res) =>
      setForeCast(res[1])
    );
  }, [location.lat, location.lon, dailyWeather.name]);

  return (
    <AppProvider
      value={{ dailyWeather, location, setLocation, foreCast, setForeCast }}
    >
      <Theme>
        <Home />
      </Theme>
    </AppProvider>
  );
}

export default App;
