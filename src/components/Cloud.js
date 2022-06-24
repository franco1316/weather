import React, { useState, useEffect } from 'react';

import '../styles/cloud.css';

const Cloud = ({weather}) => {

    const [skyTime, setSkyTime] = useState('day')
    let currentTime = new Date()
    let currentHour = currentTime.toLocaleTimeString().split(':')[0]
  
    useEffect(() => {
      (currentHour > 5 && currentHour < 18) ? setSkyTime('day') : setSkyTime('night')
    }, [currentHour])

    let bgStyleColor = skyTime === 'day' ? 'bg-day' : 'bg-night'

    let cloud = weather.clouds?.all

    const cloudImg = `http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`

    function rollADie(){
        let random = Math.floor(Math.random() * (100 - cloud)) 
        if(random === 1){
          random = 0
        }
        if(random >= cloud){
          random = 1
        }
    
        return random
      }
    
      function rollAPyramidDie(){
        let random = Math.floor(Math.random() * 3) + 1
        return random
      }

    return (
        <div className = {
            `cloud 
            ${bgStyleColor} 
            ${rollADie() === 1 ? 'opacity0' : 'opacity1'}
            ${
                rollAPyramidDie() === 1 ? 'animation-cloud-1' : 
                rollAPyramidDie() === 2 ? 'animation-cloud-2' :
                rollAPyramidDie() === 3 ? 'animation-cloud-3' : ''
            }`
        }>
            <img src = {cloudImg} alt = "" />
        </div>
    );
};

export default Cloud;