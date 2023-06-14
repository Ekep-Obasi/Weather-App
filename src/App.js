/* eslint-disable react-hooks/exhaustive-deps */
import { AppProvider } from "./context/app";
import Home from "./pages/LoadingPage/Home/Home";
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
    loading,
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
        loading,
      }}
    >
      <Theme>
        <Home />
      </Theme>
    </AppProvider>
  );
}

export default App;
