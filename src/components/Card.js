import React from 'react';

const Card = ({city, country, weather, wind, sWind, clouds, pressure, sPressure, temp, sTemp, img1}) => {
    return (
        <div className='card'>
          <h1>Weather App</h1>
          <h2>{city}, {country}</h2>
          <section className='weather'>
          <div className='column'>
                <div className='container-weather-image'>
                    <img className='weather-image' src={` http://openweathermap.org/img/wn/${img1}@2x.png`} alt="" />
                </div>
                {<h4 className='black temperature'>{temp} °{sTemp}</h4>}
            </div>
            <div className='column'>
                <h3>"{weather}"</h3>
                <p className='row'>Wind speed: <p className='black'>{wind} {sWind}</p></p>
                <p className='row'>Clouds: <p className='black'>{clouds}%</p></p>
                <p className='row'>Pressure: <p className='black'>{pressure} {sPressure}</p></p>
            </div>
          </section>
        </div>
    );
};

export default Card;