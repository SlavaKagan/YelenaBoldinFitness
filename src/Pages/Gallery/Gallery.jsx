import React from 'react';
import '@szhsin/react-menu/dist/index.css';
import YB1 from '../../assets/Gallery/YB1.jpeg';
import YB2 from '../../assets/Gallery/YB2.png';
import YB3 from '../../assets/Gallery/YB3.jpeg';
import YB4 from '../../assets/Gallery/YB4.png';
import cake1 from "../../assets/Cakes/Cake1.jpeg";
import cake2 from "../../assets/Cakes/Cake2.jpeg";
import cake3 from "../../assets/Cakes/Cake3.jpeg";
import cake4 from "../../assets/Cakes/Cake4.jpeg";
import cake5 from "../../assets/Cakes/Cake5.jpeg";

;

export function Gallery() {
    return (
        <div className="App">
            <p>
                גלריה
            </p>
            <img src={YB1} alt="logo" />
            <img src={YB2} alt="logo" />
            <img src={YB3} alt="logo" />
            <img src={YB4} alt="logo" />
        </div>
    );
}