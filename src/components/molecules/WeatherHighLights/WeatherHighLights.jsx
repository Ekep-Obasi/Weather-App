import React, { useContext } from "react";
import {
  HighLightsWrapper,
  StyledWeatherHigLightCard,
} from "./weatherHighLights.styles";
import { AppContext } from "../../../context/app";
import LinearProgressBar from "../ProgessBar/ProgessBar";

const HighLightCard = ({ title, data, isHumidity, value }) => {
  return (
    <StyledWeatherHigLightCard>
      <p className="title">{title}</p>
      <p className="data">{data || ""}</p>
      {isHumidity && <LinearProgressBar progess={value} />}
    </StyledWeatherHigLightCard>
  );
};

const WeatherHighLights = () => {
  const { dailyWeather } = useContext(AppContext);
  return (
    <HighLightsWrapper>
      <h2>Today's Highlights</h2>
      <HighLightCard
        title="Wind Status"
        data={`${dailyWeather?.windSpeed}mph`}
      />
      <HighLightCard
        title="Humidity"
        data={`${dailyWeather?.humidity}%`}
        value={dailyWeather?.humidity}
        isHumidity={true}
      />
      <HighLightCard
        title="Visibility"
        data={`${dailyWeather?.visibility}miles`}
      />
      <HighLightCard
        title="Air Pressure"
        data={`${dailyWeather?.pressure}mb`}
      />
    </HighLightsWrapper>
  );
};

export default WeatherHighLights;
