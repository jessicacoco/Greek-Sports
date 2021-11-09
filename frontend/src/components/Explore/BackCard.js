import React from 'react';
import { Card } from 'antd';

import './BackCard.css';

function BackCard({name, topThree}) {
    var els = [];
    var num = 1;
    for (let i = 2; i < topThree.length; i++) {
        els.push(<p>{num}. {topThree[i]}</p>);
        num++;
    }
    return (
        <>
        <Card title={name}>
            {els}
        </Card>
        </>
    );
}

export default BackCard;