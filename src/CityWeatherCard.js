import React from 'react';
import './city-weather.css';

const CityWeatherCard = ({ data }) => {
  const { name } = data;
  const { country } = data.sys;
  const { main } = data.weather[0];
  const { description } = data.weather[0];
  const minTemp = data.main.temp_min;
  const maxTemp = data.main.temp_max;
  const { lon } = data.coord;
  const { lat } = data.coord;
  return (
    <div className="card-holder">
      <h2>{name}, {country}</h2>
      <h3>{main}</h3>
      <h4><strong>{description}</strong></h4>
      <p>
        Min Temp: {minTemp}
      </p>
      <p>
        Max Temp: {maxTemp}
      </p>
      <p>
        Location: {lon}, {lat}
      </p>
    </div>
  );
};

export default CityWeatherCard;
