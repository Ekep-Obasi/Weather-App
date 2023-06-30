import React from "react";
import { HomeContent, HomeWrapper } from "./Home.styles";
import Sidebar from "../../components/organisms/SideBar/Sidebar";
import WeatherCards from "../../components/molecules/WeatherCard/WeatherCard";
import WeatherHighLights from "../../components/molecules/WeatherHighLights/WeatherHighLights";
import Graph from "../../components/molecules/LineGraph";
import Loader from "../../components/atoms/Loader/Loader";

const Home = () => {
  return (
    <HomeWrapper>
      <Sidebar />
      <HomeContent>
        <div className="container1">
          <WeatherCards />
          <div className="graph">
            <Graph />
          </div>
          <Loader />
        </div>
        <div className="container2">
          <WeatherHighLights />
        </div>
      </HomeContent>
    </HomeWrapper>
  );
};

export default Home;
