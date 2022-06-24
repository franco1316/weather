import React, { useState, useEffect } from 'react';

import '../styles/cloud.css';
import littleCloud from '../assets/little-cloud.png'
import midCloud from '../assets/cloud.png'
import bigCloud from '../assets/big-cloud.png'
import transparentImage from '../assets/transparent.jpg'

const Cloud = ({weather}) => {

    const [skyTime, setSkyTime] = useState('day')
    let currentTime = new Date()
    let currentHour = currentTime.toLocaleTimeString().split(':')[0]
  
    useEffect(() => {
      (currentHour > 5 && currentHour < 18) ? setSkyTime('day') : setSkyTime('night')
    }, [currentHour])

    let cloud = weather.clouds?.all

    function rollADie(){
        let random = Math.floor(Math.random() * 100) 
        random <= cloud ? random = 0 : random = 1
        return random
    }
    
    const rollAPyramidDie = () =>  Math.floor(Math.random() * 3) + 1
    const numberCloud = rollAPyramidDie()

    const myClouds = [littleCloud, midCloud, bigCloud]

    return (
        <div className = {
            `cloud 
            ${rollADie() === 1 ? 'opacity-0' : 'opacity-1'}
            ${
                numberCloud === 1 ? 'animation-cloud-1' : 
                numberCloud === 2 ? 'animation-cloud-2' :
                numberCloud === 3 ? 'animation-cloud-3' : ''
            }`
        }>
            <img 
                src = {myClouds[numberCloud]?`${myClouds[numberCloud]}`:`${transparentImage}`} 
                alt = ""
                className={myClouds[numberCloud]?'':'opacity-0'}
             />
        </div>
    );
};

export default Cloud;