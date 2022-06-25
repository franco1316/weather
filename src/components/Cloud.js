import '../styles/cloud.css';

import littleCloud1 from '../assets/little-cloud-1.png'
import midCloud1 from '../assets/cloud-1.png'
import bigCloud1 from '../assets/big-cloud-1.png'

import transparentImage from '../assets/transparent.jpg'

const Cloud = ({weather, time}) => {

    let cloud = weather.clouds?.all

    function rollADie(){
        let random = Math.floor(Math.random() * 100) 
        random <= cloud ? random = 0 : random = 1
        return random
    }
    
    const rollAPyramidDie = () =>  Math.floor(Math.random() * 3) + 1
    const numberCloud = rollAPyramidDie()

    const myClouds = [littleCloud1, midCloud1, bigCloud1]

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
                className={
                    myClouds[numberCloud]?`cloud-${time}`:'opacity-0'
                }
             />
        </div>
    );
};

export default Cloud;