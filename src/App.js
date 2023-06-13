/* eslint-disable react-hooks/exhaustive-deps */
import { AppProvider } from "./context/app";
import Home from "./pages/Home/Home";
import Theme from "./theme";
import useFetch from "./hooks/useFetch";

function App() {
  const {
    dailyWeather,
    location,
    setLocation,
    foreCast,
    setForeCast,
    mapData,
  } = useFetch();

  return (
    <AppProvider
      value={{
        dailyWeather,
        location,
        setLocation,
        foreCast,
        setForeCast,
        mapData,
      }}
    >
      <Theme>
        <Home />
      </Theme>
    </AppProvider>
  );
}

export default App;
