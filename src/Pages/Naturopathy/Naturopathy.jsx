import React from 'react';
import '@szhsin/react-menu/dist/index.css';
import naturopathy from "../../assets/Naturopathy/naturopathy.jpg";

export function Naturopathy() {
    return (
        <div className="App">
        <p>
            נטורופתיה<br/>
            הנטורופתיה היא גישה רפואית מסורתית שמקורה ביוון העתיקה,
            ואשר הייתה הרפואה המקובלת בעולם המערבי
            ובמזרח התיכון לאורך אלפי שנים. התפיסה העומדת בבסיס הנטורופתיה היא שימוש מושכל וחכם
            בטבע לריפוי מחלות ולמניעת תחלואה בעזרת צמחי מרפא, הקניית אורח חיים בריא, שימוש בתזונה
            ובטכניקות נוספות ככלי טיפולי על מנת לאפשר לגוף לאזן ולווסת תהליכים במטרה לרפא את עצמו.
            הנטורופתיה מייחסת משקל רב לקשר שבין הגוף והנפש
            ומשלבת בתוכה ידע עדכני מהרפואה המערבית המודרנית יחד עם גישה מסורתית והוליסטית.        </p>
            <img src={naturopathy} alt="logo" />
        </div>


    );
}