import React from 'react';
import '@szhsin/react-menu/dist/index.css';
import clip from "../../assets/Workouts/Train1.mp4";

export function Clips() {
    return (
        <div className="App">
            <p>
                סרטונים
            </p>
            <video src={clip} width="320" height="240" autoPlay/>
        </div>
    );
}