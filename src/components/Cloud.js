import React from 'react';

import '../styles/cloud.css';

const Cloud = (cloudImg) => {
    return (
        <div className='cloud'>
            <img src={cloudImg.cloudImg} alt="" />
        </div>
    );
};

export default Cloud;