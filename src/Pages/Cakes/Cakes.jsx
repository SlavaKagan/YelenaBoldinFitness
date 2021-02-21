import React from 'react';
import '@szhsin/react-menu/dist/index.css';
import cake1 from '../../assets/Cakes/Cake1.jpeg';
import cake2 from '../../assets/Cakes/Cake2.jpeg';
import cake3 from '../../assets/Cakes/Cake3.jpeg';
import cake4 from '../../assets/Cakes/Cake4.jpeg';
import cake5 from '../../assets/Cakes/Cake5.jpeg';

export function Cake() {
    return (
        <div className="App">
        <p>
            עוגות
        </p>

        <img src={cake1} alt="logo" />
            <img src={cake2} alt="logo" />
            <img src={cake3} alt="logo" />
            <img src={cake4} alt="logo" />
            <img src={cake5} alt="logo" />
        </div>
    );
}