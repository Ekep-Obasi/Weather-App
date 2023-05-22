import React from "react";
import { CardWrapper, StyledWeatherCard } from "./WeatherCard.styles";
import WeatherIcon from "../../atoms/WeatherIcon";
import image from "../../../assets/images/Thunderstorm.png";

const WeatherCard = () => {
  return (
    <StyledWeatherCard>
      <div className="day">Tomorrow</div>
      <WeatherIcon image={image} />
      <div className="temperature">
        <span>10 &deg;</span>
        <span className="second">16 &deg;</span>
      </div>
    </StyledWeatherCard>
  );
};

const WeatherCards = () => {
  return (
    <CardWrapper>
      {new Array(5).fill("").map((el, i) => (
        <WeatherCard key={i} />
      ))}
    </CardWrapper>
  );
};

export default WeatherCards;
