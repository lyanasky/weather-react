import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [currentLocation, setCurrentLocation] = useState(false);

  function handleResponse(response) {
    if (response.data.status !== "not_found") {
      setWeatherData({
        ready: true,
        coordinates: response.data.coordinates,
        date: new Date(response.data.time * 1000),
        temperature: response.data.temperature.current,
        wind: response.data.wind.speed,
        city: response.data.city,
        description: response.data.condition.description,
        humidity: response.data.temperature.humidity,
        icon: response.data.condition.icon,
      });
    } else {
      cityNotFound();
    }
  }

  function search() {
    const apiKey = "e48e1aab0acf4fc215c13f02ct8bo5ab";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse).catch(cityNotFound);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function cityNotFound() {
    alert("Please enter a valid city!");
  }

  function searchLocation(position) {
    const apiKey = "e48e1aab0acf4fc215c13f02ct8bo5ab";
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse).catch(cityNotFound);
    setCurrentLocation(false);
  }

  function handleLocationClick(event) {
    event.preventDefault();
    setCurrentLocation(true);
    navigator.geolocation.getCurrentPosition(searchLocation);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control search"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
            <div className="col-3">
              {currentLocation ? (
                <button className="btn btn-success w-100" disabled></button>
              ) : (
                <button
                  className="btn btn-success w-100"
                  onClick={handleLocationClick}
                >
                  {" "}
                  My Location
                </button>
              )}
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
