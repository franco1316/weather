import React from 'react';

import '../styles/cloud.css';

const Cloud = ({cloudImg, bgStyle, className, cloudAnimation}) => {
    return (
        <div className={`cloud ${bgStyle} ${className} ${cloudAnimation}`}>
            <img src={cloudImg} alt="" />
        </div>
    );
};

export default Cloud;