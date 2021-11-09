import React from 'react';
import { Card } from 'antd';

import './BackCard.css';

function BackCard({name}) {
    var els = [];
    var num = 1;
    // call top 3 query here using name as input
    var data = [['RPI Womens Soccer', 3], ['Outdoors Club', 5], ['ACHA Hockey', 10]];

    for (let i = 0; i < data.length; i++) {
        els.push(<p>{num}. {data[i][0]}</p>);
        num++;
    }
    return (
        <>
        <Card title={name} style={{height: '240px'}}>
            {els}
        </Card>
        </>
    );
}

export default BackCard;