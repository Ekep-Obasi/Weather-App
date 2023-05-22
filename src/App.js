import { useEffect, useState } from "react";
import { AppProvider } from "./context/app";
import Home from "./pages/Home/Home";
import Theme from "./theme";
import getLocation from "./utlils/location";
import { getCurrentWeather } from "./services/data.repo";

function App() {
  const [dailyWeather, setDailyWeather] = useState();

  useEffect(() => {
    getLocation()
      .then((res) => getCurrentWeather(res))
      .then((res) => setDailyWeather(res));
  }, []);

  return (
    <AppProvider value={{ dailyWeather }}>
      <Theme>
        <Home />
      </Theme>
    </AppProvider>
  );
}

export default App;
