import React from 'react';
import '@szhsin/react-menu/dist/index.css';
import Strings from '../../utils/strings';

export function Contact() {
    return (
        <p dir="rtl"> <br/>
            {Strings.Contact} <br/> <br/>
            אימייל: yelenaboldinfitness@gmail.com<br/>
            טלפון: 052-333-4753<br/>
            איזור גוש דן
        </p>
    );
}