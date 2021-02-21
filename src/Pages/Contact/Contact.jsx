import React from 'react';
import '@szhsin/react-menu/dist/index.css';
import facebook from '../../assets/Social/facebook.png';
import instagram from '../../assets/Social/instagram.png';
import Strings from '../../utils/strings';

export function Contact() {
    return (
        <p>
            {/*{Strings.CONTACT};*/}
            צור קשר<br/>
            אימייל:yelenaboldinfitness@gmail.com
            טלפון: 052-333-4753
            איזור גוש דן
        </p>
    );
}