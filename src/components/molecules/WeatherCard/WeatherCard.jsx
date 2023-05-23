import React, { useContext } from "react";
import { CardWrapper, StyledWeatherCard } from "./WeatherCard.styles";
import WeatherIcon from "../../atoms/WeatherIcon";
import image from "../../../assets/images/Thunderstorm.png";
import { AppContext } from "../../../context/app";
import convertTemperature from "../../../utlils/convertTemp";

const WeatherCard = ({ day, temp, icon, humidity }) => {
  return (
    <StyledWeatherCard>
      <div className="day">{day || ""}</div>
      <WeatherIcon image={image} />
      <div className="temperature">
        <span>{convertTemperature("fahrenheit", temp) || ""}&deg;</span>
        <span className="second">{humidity || ""}%</span>
      </div>
    </StyledWeatherCard>
  );
};

const WeatherCards = () => {
  const { foreCast } = useContext(AppContext);
  return (
    <CardWrapper>
      {foreCast.map(({ day, temp, weather, humidity }, i) => (
        <WeatherCard
          day={day}
          temp={temp}
          humidity={humidity}
          icon={weather.icon}
          key={i}
        />
      ))}
    </CardWrapper>
  );
};

export default WeatherCards;
