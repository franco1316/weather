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
}) => {

    return (
        <div className = 'card'>
            <h1>Weather App</h1>
            <h2>
                {city}, {country}
            </h2>
            <section className = 'weather'>
            <div className = 'column'>
                <div className = 'container-weather-image'>
                    <img className = 'weather-image' src = {` http://openweathermap.org/img/wn/${image}@2x.png`} alt = "" />
                </div>
                <h4 className = 'black temperature'>{temperature} °{temperatureSystem}</h4>
            </div>
            <div className = 'column'>
                <h3>"{weather}"</h3>
                <p className = 'row'>Wind speed: <p className = 'black'>{windSpeed} {windSpeedSystem}</p></p>
                <p className = 'row'>Clouds: <p className = 'black'>{clouds}%</p></p>
                <p className = 'row'>Pressure: <p className = 'black'>{pressure} {pressureSystem}</p></p>
            </div>
          </section>
        </div>
    );
};

export default Card;