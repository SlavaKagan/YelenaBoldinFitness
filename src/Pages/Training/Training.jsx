import React from 'react';
import '@szhsin/react-menu/dist/index.css';
import hiit from "../../assets/Workouts/hiit.jpg";
import spining from "../../assets/Workouts/spining.jpg";
import trx from "../../assets/Workouts/trx.jpg";
import kickbox1 from "../../assets/Workouts/kickbox1.jpg";
import kickbox2 from "../../assets/Workouts/kickbox2.jpeg";

export function Training() {
    return (
        <div className="App">
            <p>
                אימונים
            </p>
            <img src={hiit} alt="logo" />
            <img src={spining} alt="logo" />
            <img src={trx} alt="logo" />
            <img src={kickbox1} alt="logo" width="15%" height="10%"/>
            <img src={kickbox2} alt="logo" width="15%" height="10%" />
        </div>
    );
}