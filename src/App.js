import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './components/Card'

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
        setSpee(res.data.wind.speed)
        setClouds(res.data.clouds.all)
        
      })
      .catch(e=>console.log(e))
  }

  useEffect( () => {
     navigator.geolocation.getCurrentPosition(success)
  }, [] )

  console.log(weather)




  const [system, setSystem] = useState('Unit Default')

  let temperature = weather.main?.temp
  const [temp, setTemp] = useState(temperature)
  const [systemTemp, setSystemTemp] = useState(' K ')
  const [systemPressure, setSystemPressure] = useState(' hpa ')
  let speed=weather.wind?.speed
  const [spee, setSpee] = useState(speed)
  const [systemSpeed, setSystemSpeed] = useState('m/s')
  let cloud=weather.clouds?.all
  const [clouds, setClouds]=useState(cloud)

  const roundDecimal=(decimal, nDecimal)=>{
    let base=Math.pow(10,nDecimal)
    let result=Math.round(decimal*base)/base
    return result
  }
  const changeSystem = () => {

    if(system === 'Unit Default'){
      temperature -= 273
      
      setSystem('Metric')
      setSystemPressure('hpa')
      setSystemTemp('C')
    }
    else if(system === 'Metric'){
      temperature = ((temperature*9/5)+32)
      speed*=2.237
      setSystem('Imperial')
      setSystemPressure('mb')
      setSystemTemp('F')
      setSystemSpeed('m/h')
    }
    else{
      temperature = (((temperature-32)*5/9)+273)
      setSystem('Unit Default')
      setSystemTemp('K')
      setSystemSpeed('m/s')
    }
    temperature = (roundDecimal(temperature, 2));
    speed=(roundDecimal(speed,2))
    setSpee(speed)
    setTemp(temperature)
  }

 
  return (
    <div className="App">
      <div className='background'>
        <Card city={weather.name} country={weather.sys?.country} weather={weather.weather?.[0].description}
        wind={spee} sWind={systemSpeed} clouds={clouds} pressure={weather.main?.pressure} sPressure={systemPressure}
        temp={temp} sTemp={systemTemp} img1={weather.weather?.[0].icon}/>

          <button className='card size' onClick={changeSystem}>Convert to {system === 'Unit Default' ? ' Metric ' :
          system === 'Metric' ? 'Imperial' : system === ' Imperial ' ? ' Unit Default ' : ' Unit Default '}</button>
      </div>
    </div>
  );
}

export default App;
