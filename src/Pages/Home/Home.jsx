import React from 'react';
import '@szhsin/react-menu/dist/index.css';
import kosher1 from '../../assets/Fit/fit3.jpg';

export function Home() {
    return (
        <div className="App">
        <p>
            Yelena Boldin ילנה בולדין<br/>
            מאמנת מוסמכת באיזור המרכז<br/>
            משפט לחיים: תזונה נכונה ואימונים זה המתכון האידיאלי לחיים בריאים<br/>
        </p>

        <img src={kosher1} alt="logo" width="15%" height="10%"/> <br/> <br/>
        <p> <b> &copy; כל הזכויות שמורות לילנה בולדין 2021 </b> </p>
        </div>
    );
}