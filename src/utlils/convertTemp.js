function convertTemperature(temp, value) {
  if (temp === "fahrenheit") {
    return Math.floor(value - 273.15);
  } else {
    return (value - 32) * (9 / 5);
  }
}

export default convertTemperature;
