import React from 'react';
import '@szhsin/react-menu/dist/index.css';
import cake1 from '../../assets/Cakes/Cake1.jpeg';
import cake2 from '../../assets/Cakes/Cake2.jpeg';
import cake3 from '../../assets/Cakes/Cake3.jpeg';
import cake4 from '../../assets/Cakes/Cake4.jpeg';
import cake5 from '../../assets/Cakes/Cake5.jpeg';
import cake6 from '../../assets/Cakes/Cake6.png';

export function Cake() {
    return (
        <div className="App">
        <p>
            עוגות
        </p>
        <img src={cake1} alt="logo" width="15%" height="10%"/>
        <img src={cake2} alt="logo" width="15%" height="10%"/>
        <img src={cake3} alt="logo" width="15%" height="10%"/> <br/> <br/>
        <img src={cake4} alt="logo" width="15%" height="10%"/>
        <img src={cake5} alt="logo" width="15%" height="10%"/>
        <img src={cake6} alt="logo" width="15%" height="10%"/>
        </div>
    );
}