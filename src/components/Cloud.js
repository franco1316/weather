import React from 'react';

import '../styles/cloud.css';

const Cloud = ({cloudImg, bgStyle, className}) => {
    return (
        <div className={`cloud ${bgStyle} ${className}`}>
            <img src={cloudImg} alt="" />
        </div>
    );
};

export default Cloud;