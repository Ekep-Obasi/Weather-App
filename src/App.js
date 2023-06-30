/* eslint-disable react-hooks/exhaustive-deps */
import { AppProvider } from "./context/app";
import Home from "./pages/Home/Home";
import Theme from "./theme";
import useFetch from "./hooks/useFetch";
import LoadingPage from "./pages/LoadingPage/LoadingPages";

function App() {
  const {
    dailyWeather,
    location,
    setLocation,
    foreCast,
    setForeCast,
    mapData,
    loading,
    initialLoad,
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
        initialLoad,
      }}
    >
      <Theme>{initialLoad ? <LoadingPage /> : <Home />}</Theme>
    </AppProvider>
  );
}

export default App;
