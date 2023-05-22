import React from "react";
import {
  HighLightsWrapper,
  StyledWeatherHigLightCard,
} from "./weatherHighLights.styles";

const HighLightCard = ({ title, data }) => {
  return (
    <StyledWeatherHigLightCard>
      <p className="title">{title}</p>
      <p className="data">{data}</p>
    </StyledWeatherHigLightCard>
  );
};

const highLights = [
  {
    title: "Wind Status",
    value: "7mph",
  },
  {
    title: "Humidity",
    value: "84%",
  },

  {
    title: "visibility",
    value: "6,4 miles",
  },
  {
    title: "Air Pressure",
    value: "998 mb",
  },
];

const WeatherHighLights = () => {
  return (
    <HighLightsWrapper>
      <h2>Today's Highlights</h2>
      {highLights.map(({ title, value }) => (
        <HighLightCard title={title} data={value} />
      ))}
    </HighLightsWrapper>
  );
};

export default WeatherHighLights;
