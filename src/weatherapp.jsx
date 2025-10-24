import React, { useState } from "react";
import Searchbox from "./search.jsx";
import Info from "./info.jsx";
export default function WeatherApp() {
  const [weatherData, setWeatherData] = useState({
    name: "Mumbai",
    feelsLike: 306,
    temp: 304.14,
    humidity: 55,
    pressure: 1009,
    description: "haze"
  });
  let updatedData = (data) => {
    setWeatherData(data);
  };
  return (
    <div className="WeatherApp">
      <Searchbox updatedData={updatedData} innava/>
      <br /><br />
      <Info info={weatherData} />
    </div>
  );
}