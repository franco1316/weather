import {useState, useEffect} from 'react';
import axios from 'axios';

import Card from './Card';
import Cloud from './Cloud';

import '../styles/App.css';

function App() {

  const [weather, setWeather] = useState({})
  const success = (pos) => {

    const latitude = pos.coords.latitude
    const longitude = pos.coords.longitude
    const apiKey = 'ab66cda0625cbf49ebc7931f2f93b588'

      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
      .then(res=>{
        setWeather(res.data)
        setTemp(res.data.main.temp)
        setWindSpeed(res.data.wind.speed)
        setCloudy(res.data.clouds.all)
      })
      .catch(e=>console.log(e))
  }
  
  const [skyTime, setSkyTime] = useState('day')
  let currentTime = new Date()
  let currentHour = currentTime.toLocaleTimeString().split(':')[0]

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  useEffect(() => {
    (currentHour > 5 && currentHour < 18) ? setSkyTime('day') : setSkyTime('night')
  }, [currentHour])


  const [system, setSystem] = useState('Unit Default')

  let temperature = weather.main?.temp
  const [temp, setTemp] = useState(temperature)
  const [temperatureSystem, setTemperatureSystem] = useState(' K ')

  const [pressureSystem, setPressureSystem] = useState(' hpa ')

  let speed = weather.wind?.speed
  const [windSpeed, setWindSpeed] = useState(speed)
  const [windSpeedSystem, setWindSpeedSystem] = useState('m/s')

  let cloud = weather.clouds?.all
  const [cloudy, setCloudy] = useState(cloud)


  const roundDecimal = (decimal, nDecimal) => {
    let base = Math.pow(10, nDecimal)
    return Math.round(decimal * base) / base
  }

  const changeSystem = () => {

    if(system === 'Unit Default'){

      //international --> metric
      temperature -= 273.15
      
      setSystem('Metric')
      setPressureSystem('hpa')
      setTemperatureSystem('C')
    }

    else if(system === 'Metric'){

      //international --> imperial
      temperature = ((temperature -273.15) * 9/5) + 32
      speed *= 2.237

      setSystem('Imperial')
      setPressureSystem('mb')
      setTemperatureSystem('F')
      setWindSpeedSystem('m/h')
    }

    else{

      //international --> international

      setSystem('Unit Default')
      setTemperatureSystem('K')
      setWindSpeedSystem('m/s')
    }

    temperature = roundDecimal(temperature, 2)
    speed = roundDecimal(speed, 2)
    setWindSpeed(speed)
    setTemp(temperature)
  }

  let bgStyleColor = skyTime === 'day' ? 'bg-day' : 'bg-night'

  function rollADie(){
    let random = Math.floor(Math.random() * (100 - cloudy)) 
    if(random === 1){
      random = 0
    }
    if(random >= cloudy){
      random = 1
    }

    return random
  }
 
  return (
    <div className = "App">
      <div className = {`background ${bgStyleColor}`}>
        { 
          (weather.weather?.[0].description !== 'clear sky' || cloudy !== 0) &&
          <div className = "container-clouds">
            <Cloud 
              bgStyle = {bgStyleColor}
              cloudImg = {`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
              className = {`${rollADie() === 1 ? 'opacity0' : 'opacity1'}`}
            />
            <Cloud 
              bgStyle = {bgStyleColor}
              cloudImg = {`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
              className = {`${rollADie() === 1 ? 'opacity0' : 'opacity1'}`}
            />
            <Cloud 
              bgStyle = {bgStyleColor}
              cloudImg = {`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
              className = {`${rollADie() === 1 ? 'opacity0' : 'opacity1'}`}
            />
            <Cloud 
              bgStyle = {bgStyleColor}
              cloudImg = {`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
              className = {`${rollADie() === 1 ? 'opacity0' : 'opacity1'}`}
            />
            <Cloud 
              bgStyle = {bgStyleColor}
              cloudImg = {`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
              className = {`${rollADie() === 1 ? 'opacity0' : 'opacity1'}`}
            />
            <Cloud 
              bgStyle = {bgStyleColor}
              cloudImg = {`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
              className = {`${rollADie() === 1 ? 'opacity0' : 'opacity1'}`}
            />
            <Cloud 
              bgStyle = {bgStyleColor}
              cloudImg = {`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
              className = {`${rollADie() === 1 ? 'opacity0' : 'opacity1'}`}
            />
            <Cloud 
              bgStyle = {bgStyleColor}
              cloudImg = {`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
              className = {`${rollADie() === 1 ? 'opacity0' : 'opacity1'}`}
            />
            <Cloud 
              bgStyle = {bgStyleColor}
              cloudImg = {`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
              className = {`${rollADie() === 1 ? 'opacity0' : 'opacity1'}`}
            />
            <Cloud 
              bgStyle = {bgStyleColor}
              cloudImg = {`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
              className = {`${rollADie() === 1 ? 'opacity0' : 'opacity1'}`}
            />
            <Cloud 
              bgStyle = {bgStyleColor}
              cloudImg = {`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
              className = {`${rollADie() === 1 ? 'opacity0' : 'opacity1'}`}
            />
            <Cloud 
              bgStyle = {bgStyleColor}
              cloudImg = {`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
              className = {`${rollADie() === 1 ? 'opacity0' : 'opacity1'}`}
            />
            <Cloud 
              bgStyle = {bgStyleColor}
              cloudImg = {`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
              className = {`${rollADie() === 1 ? 'opacity0' : 'opacity1'}`}
            />
            <Cloud 
              bgStyle = {bgStyleColor}
              cloudImg = {`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
              className = {`${rollADie() === 1 ? 'opacity0' : 'opacity1'}`}
            />
            <Cloud 
              bgStyle = {bgStyleColor}
              cloudImg = {`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
              className = {`${rollADie() === 1 ? 'opacity0' : 'opacity1'}`}
            />
            <Cloud 
              bgStyle = {bgStyleColor}
              cloudImg = {`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
              className = {`${rollADie() === 1 ? 'opacity0' : 'opacity1'}`}
            />
            <Cloud 
              bgStyle = {bgStyleColor}
              cloudImg = {`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
              className = {`${rollADie() === 1 ? 'opacity0' : 'opacity1'}`}
            />
            <Cloud 
              bgStyle = {bgStyleColor}
              cloudImg = {`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
              className = {`${rollADie() === 1 ? 'opacity0' : 'opacity1'}`}
            />
            <Cloud 
              bgStyle = {bgStyleColor}
              cloudImg = {`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
              className = {`${rollADie() === 1 ? 'opacity0' : 'opacity1'}`}
            />
            <Cloud 
              bgStyle = {bgStyleColor}
              cloudImg = {`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
              className = {`${rollADie() === 1 ? 'opacity0' : 'opacity1'}`}
            />
            <Cloud 
              bgStyle = {bgStyleColor}
              cloudImg = {`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
              className = {`${rollADie() === 1 ? 'opacity0' : 'opacity1'}`}
            />
            <Cloud 
              bgStyle = {bgStyleColor}
              cloudImg = {`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
              className = {`${rollADie() === 1 ? 'opacity0' : 'opacity1'}`}
            />
            <Cloud 
              bgStyle = {bgStyleColor}
              cloudImg = {`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
              className = {`${rollADie() === 1 ? 'opacity0' : 'opacity1'}`}
            />
            <Cloud 
              bgStyle = {bgStyleColor}
              cloudImg = {`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
              className = {`${rollADie() === 1 ? 'opacity0' : 'opacity1'}`}
            />
            <Cloud 
              bgStyle = {bgStyleColor}
              cloudImg = {`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
              className = {`${rollADie() === 1 ? 'opacity0' : 'opacity1'}`}
            />
            <Cloud 
              bgStyle = {bgStyleColor}
              cloudImg = {`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
              className = {`${rollADie() === 1 ? 'opacity0' : 'opacity1'}`}
            />
            <Cloud 
              bgStyle = {bgStyleColor}
              cloudImg = {`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
              className = {`${rollADie() === 1 ? 'opacity0' : 'opacity1'}`}
            />
            <Cloud 
              bgStyle = {bgStyleColor}
              cloudImg = {`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
              className = {`${rollADie() === 1 ? 'opacity0' : 'opacity1'}`}
            />
            <Cloud 
              bgStyle = {bgStyleColor}
              cloudImg = {`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
              className = {`${rollADie() === 1 ? 'opacity0' : 'opacity1'}`}
            />
            <Cloud 
              bgStyle = {bgStyleColor}
              cloudImg = {`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
              className = {`${rollADie() === 1 ? 'opacity0' : 'opacity1'}`}
            />
            <Cloud 
              bgStyle = {bgStyleColor}
              cloudImg = {`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
              className = {`${rollADie() === 1 ? 'opacity0' : 'opacity1'}`}
            />
            <Cloud 
              bgStyle = {bgStyleColor}
              cloudImg = {`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
              className = {`${rollADie() === 1 ? 'opacity0' : 'opacity1'}`}
            />
            <Cloud 
              bgStyle = {bgStyleColor}
              cloudImg = {`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
              className = {`${rollADie() === 1 ? 'opacity0' : 'opacity1'}`}
            />
            <Cloud 
              bgStyle = {bgStyleColor}
              cloudImg = {`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
              className = {`${rollADie() === 1 ? 'opacity0' : 'opacity1'}`}
            />
            <Cloud 
              bgStyle = {bgStyleColor}
              cloudImg = {`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
              className = {`${rollADie() === 1 ? 'opacity0' : 'opacity1'}`}
            />
          </div>
        }
        <Card 
          city = {weather.name} 
          country = {weather.sys?.country} 
          weather = {weather.weather?.[0].description}
          windSpeed = {windSpeed} 
          windSpeedSystem = {windSpeedSystem} 
          clouds = {cloudy} 
          pressure = {weather.main?.pressure} 
          pressureSystem = {pressureSystem}
          temperature = {temp} 
          temperatureSystem = {temperatureSystem} 
          image = {weather.weather?.[0].icon}
        />

        <button className = 'card size button' onClick = {() => changeSystem()}>
          Convert to {
            system === 'Unit Default' ? ' Metric ' :
            system === 'Metric' ? 'Imperial' : 
            system === ' Imperial ' ? ' International System ' : ' International System '
          }
        </button>
      </div>
    </div>
  );
}

export default App;
