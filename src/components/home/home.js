import React, { useState } from 'react';
import './home.css';
import thunderCloud from '../assets/thunderCloud.png';
import temperature from '../assets/temperature.png';
import fewcloud from '../assets/fewcloud.png';
// import cloudSun from '../assets/cloudSun.png';
import drizzle from '../assets/drizzle.png';
import rain from '../assets/rain.png';
import snow from '../assets/snow.png';
import sunnyColor from '../assets/sunnyColor.png';
import clouds from '../assets/clouds.png';
import brokencloud from '../assets/brokencloud.png';
import mist from '../assets/mist.png';

const Home = () => {
  const [search, setSearch] = useState("Dibrugarh");
  const [city, setCity] = useState(null);
  const [weaIcon, setWeaIcon] = useState(sunnyColor);

  const Search = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=4c04100bb464ebc251fe6aae96ef7fc0&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    setCity(data);

    if(data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setWeaIcon(sunnyColor);
    }
    else if(data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
      setWeaIcon(fewcloud);
    }
    else if(data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
      setWeaIcon(clouds);
    }
    else if(data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
      setWeaIcon(brokencloud);
    }
    else if(data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
      setWeaIcon(drizzle);
    }
    else if(data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
      setWeaIcon(rain);
    }
    else if(data.weather[0].icon === "11d" || data.weather[0].icon === "11n") {
      setWeaIcon(thunderCloud);
    }
    else if(data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
      setWeaIcon(snow);
    }
    else if(data.weather[0].icon === "50d" || data.weather[0].icon === "50n") {
      setWeaIcon(mist);
    }
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
            onChange={(event) => {
              setSearch(event.target.value)
            }}
          />
          <div className="search-icon" onClick={() => { Search() }} >
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="time">{time.getHours()}:{time.getMinutes()}</div>
        </div>
        {!city ? (
          <p className='errMSg'>City Not Found</p>
        ) : (
          <div className="box">
            <div className="we-detail">
              <div className="weather-icon">
                <img src={weaIcon} alt="thunder" />
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
