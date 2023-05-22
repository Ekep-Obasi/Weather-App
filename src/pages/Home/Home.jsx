import React from "react";
import { HomeContent, HomeWrapper } from "./Home.styles";
import Sidebar from "../../components/organisms/SideBar/Sidebar";
import WeatherCards from "../../components/molecules/WeatherCard/WeatherCard";
import WeatherHighLights from "../../components/molecules/WeatherHighLights/WeatherHighLights";

const Home = () => {
  return (
    <HomeWrapper>
      <Sidebar />
      <HomeContent>
        <div className="container1">
          <WeatherCards />
          <div className="graph"></div>
        </div>
        <div className="container2">
          <WeatherHighLights />
        </div>
      </HomeContent>
    </HomeWrapper>
  );
};

export default Home;
