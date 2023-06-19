const WeatherIcon = (props) => {
  return (
    <img
      src={` http://openweathermap.org/img/w/${props.image}.png`}
      alt="icons"
    />
  );
};

export default WeatherIcon;
