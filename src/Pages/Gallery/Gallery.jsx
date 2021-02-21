import React from 'react';
import '@szhsin/react-menu/dist/index.css';
import YB1 from '../../assets/Gallery/YB1.jpeg';
import YB2 from '../../assets/Gallery/YB2.png';
import YB3 from '../../assets/Gallery/YB3.jpeg';
import YB4 from '../../assets/Gallery/YB4.png';

const row =`
	display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
`;

export function Gallery() {
    return (
        <row>
            <div className="column">
                <img src={YB1} style="width:100%"/>
                <img src={YB2} style="width:100%"/>
                <img src={YB3} style="width:100%"/>
                <img src={YB4} style="width:100%"/>
            </div>
        </row>
    );
}