import React, { Component } from 'react';
import './App.css';

function Title(){
  return(
    <h1>7 days Weather Forecast</h1>

  );
}

function Location(){
  return(
    <div className="city-day-condition">
      <p className="cityName">Miami, FL</p>
      <p className="day">Wednesday</p>
      <p className="condition">Party Cloud</p>
    </div>
  );
}

function WeatherData(){
  return(
    <div className="weather-data">
      <div className="icon-temperature">
        <i className='fa fa-cloud-sun'></i>
        <span className="temperature">86°C</span>
      </div>
      <div className="wind-humidity-pressure">
        <p className="wind">Wind : 20 mph</p>
        <p className="humidity">Humidity : 94%</p>
        <p className="pressure">Pressure : 95 kpa</p>
      </div>

    </div>

  );
}

function HourlyDetails(){
  return(
    <div className="table">
      <div className="place-hour">
        <p>Miami, FL Hourly Weather</p>
        <p className="time">8:30 pm EST</p>
      </div>
      <table>
        <thead>
          <tr>
            <td>
              Time
            </td>
            <td>
              Description
            </td>
            <td>
              Temperature
            </td>
            <td>
              Humidity
            </td>
            <td>
              Wind
            </td>
            <td>
              Pressure
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>9:00 PM Wed</td>
            <td>Clear</td>
            <td> 
              <span className="high"> 86°C</span>
              <span className="low"> 66°C</span>
            </td>
            <td> 
              <span className="high"> 0%</span>
              <span className="low"> 66%</span>
            </td>
            <td>2 mph</td>
            <td>95 kpa</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function WeatherByDay(){
  return(
    <div className="weather-by-day">
      <i className='fa fa-cloud-sun'></i>
      <p className="temperature">
        <span className="high"> 86°C</span>
        <span className="low"> 66°C</span>
      </p>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div className="main">
        <div className="title">
          <Title/>
        </div>
        <div className="city">
          <Location/>
        </div>
        <div className="temperature-details">
          <WeatherData/>
        </div>
        <div className="weather-hourly-details">
          <HourlyDetails/>
        </div>
        <div className="seven-day-weather">
          <div>
            <p className="day">Thur</p>
            <WeatherByDay/>
          </div>
          <div>
            <p className="day">Fri</p>
            <WeatherByDay/>
          </div>
          <div>
            <p className="day">Sat</p>
            <WeatherByDay/>
          </div>
          <div>
            <p className="day">Sun</p>
            <WeatherByDay/>
          </div>
          <div>
            <p className="day">Mon</p>
            <WeatherByDay/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
