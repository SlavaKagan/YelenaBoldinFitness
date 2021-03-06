import React from 'react';
import '@szhsin/react-menu/dist/index.css';
import naturopathy from "../../assets/Naturopathy/naturopathy.jpg";

export function Naturopathy() {
    return (
        <div className="App">
        <p>
            נטורופאתיה <br/>
            <br/>
            הנטורופתיה היא גישה רפואית מסורתית שמקורה ביוון העתיקה,
            ואשר הייתה הרפואה
            <br/>
            המקובלת בעולם המערבי
            ובמזרח התיכון לאורך אלפי שנים.
            <br/>
            התפיסה העומדת בבסיס הנטורופתיה היא שימוש מושכל וחכם
            בטבע לריפוי מחלות
            <br/>
            ולמניעת תחלואה בעזרת צמחי מרפא, הקניית אורח חיים בריא, שימוש בתזונה
            <br/>
            ובטכניקות נוספות ככלי טיפולי על מנת לאפשר לגוף לאזן ולווסת תהליכים במטרה לרפא את עצמו.
            <br/>
            הנטורופתיה מייחסת משקל רב לקשר שבין הגוף והנפש
            ומשלבת בתוכה ידע עדכני
            <br/>
            מהרפואה המערבית המודרנית יחד עם גישה מסורתית והוליסטית.
        <br/> <br/>
        </p>
            <img src={naturopathy} alt="logo" />
        </div>


    );
}