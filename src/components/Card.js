import React from 'react';

import '../styles/card.css';

const Card = ({
    city, 
    country, 
    weather,
    windSpeed, 
    windSpeedSystem,
    clouds,
    pressure, 
    pressureSystem,
    temperature,
    temperatureSystem,
    image,
    time
}) => {

    return (
        <div className = {`card card-${time}`}>
            <h1>Weather App</h1>
            <h2>
                {city}, {country}
            </h2>
            <section className = 'weather'>
            <div className = 'column'>
                <div className = 'container-weather-image'>
                    <img className = 'weather-image' src = {` http://openweathermap.org/img/wn/${image}@2x.png`} alt = "" />
                </div>
                <h4 className = {`space font-color-${time} temperature`}>{temperature} °{temperatureSystem}</h4>
            </div>
            <div className = 'column'>
                <h3>"{weather}"</h3>
                <p className = 'row'>Wind speed: <label className = {`space font-color-${time}`}>{windSpeed} {windSpeedSystem}</label></p>
                <p className = 'row'>Clouds: <label className = {`space font-color-${time}`}>{clouds}%</label></p>
                <p className = 'row'>Pressure: <label className = {`space font-color-${time}`}>{pressure} {pressureSystem}</label></p>
            </div>
          </section>
        </div>
    );
};

export default Card;