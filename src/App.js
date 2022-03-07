import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

  const [weather, setWeather] = useState({})

  const success = (pos) => {

    const latitude = pos.coords.latitude
    const longitude = pos.coords.longitude
    const apiKey = 'ab66cda0625cbf49ebc7931f2f93b588'

      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
      .then(res=>setWeather(res.data))
      .catch(e=>console.log(e))
  }

  useEffect(()=>{
     navigator.geolocation.getCurrentPosition(success)
  },[])

  console.log(weather)
 
  return (
    <div className="App">
      <img src={` http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`} alt="" />
    </div>
  );
}

export default App;
