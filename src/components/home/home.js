import React, { useState } from 'react';
import './home.css';
import thunderCloud from '../assets/thunderCloud.png';
import temperature from '../assets/temperature.png';

const Home = () => {
  const [search, setSearch] = useState("Dibrugarh");
  const [city, setCity] = useState(null);

  const Search = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=4c04100bb464ebc251fe6aae96ef7fc0&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    setCity(data);
  }

  const time = new Date();

  return (
    <div className="home">
      <div className="container">
        <div className="header">
          <input
            type="search"
            name="search"
            placeholder='Search...'
            className="search-box"
            onChange={(event)=> {
              setSearch(event.target.value)
            }}
          />
          <div className="search-icon" onClick={() => { Search() }} >
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="time">{time.getHours()-12}:{time.getMinutes()}</div>
        </div>
        {!city ? (
          <p className='errMSg'>City Not Found</p>
        ) : (
          <div className="box">
            <div className="we-detail">
              <div className="weather-icon">
                <img src={thunderCloud} alt="thunder" />
              </div>
              <div className="weather-dis">{city.weather[0].main}</div>
              <div className="temp">{city.main.temp}°</div>
            </div>
            <div className="temp-img">
              <img src={temperature} alt="temperature" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
