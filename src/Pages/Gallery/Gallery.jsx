import React from 'react';
import '@szhsin/react-menu/dist/index.css';
import YB1 from '../../assets/Gallery/YB1.jpeg';
import YB2 from '../../assets/Gallery/YB2.png';
import YB3 from '../../assets/Gallery/YB3.jpeg';
import YB4 from '../../assets/Gallery/YB4.png';

export function Gallery() {
    return (
        <div className="App">
            <p>
                גלריה
            </p>
            <img src={YB1} alt="logo" width="15%" height="10%"/>
            <img src={YB2} alt="logo" width="15%" height="10%"/> <br/> <br/>
            <img src={YB3} alt="logo" width="15%" height="10%"/>
            <img src={YB4} alt="logo" width="15%" height="10%"/>
        </div>
    );
}