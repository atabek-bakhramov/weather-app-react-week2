import React, { useState, useEffect } from 'react';
import CityWeatherCard from './CityWeatherCard';
import Search from './Search';
import dotenv from 'dotenv';
import './city-weather.css';
dotenv.config();

const App = () => {
  const [cityWeather, setCityWeather] = useState(null);
  const [cityNameFromInput, setCityNameFromInput] = useState('');
  const [cityNameOnButton, setCityNameOnButton] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        if (cityNameOnButton) {
          setLoading(true);
          setError(''); // in case if we had an error previously, we reset it
          const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityNameFromInput}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`);
          if (!response.ok) throw new Error(response.statusText);
          const data = await response.json();
          setCityWeather(data);
        } else {
          throw new Error('Enter City Name');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();

  }, [cityNameOnButton]);

  return (
    <div className="container">
      <h1>Weather</h1>
      <Search cityNameFromInput={cityNameFromInput} setCityNameFromInput={setCityNameFromInput}
      setCityNameOnButton={setCityNameOnButton} />
      {error ? <p className="error-message">{error}</p> 
        : 
        isLoading ? 
        <p>Loading...</p> : 
        cityWeather && <CityWeatherCard data={cityWeather} />
      }                                                 
    </div>
  );
};

export default App;
