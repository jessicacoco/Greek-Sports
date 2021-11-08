import React from 'react';
import { Card } from 'antd';

import './FrontCard.css';


function FrontCard({name, topThree}) {
    var els = [];
    for (let i = 0; i < topThree.length; i++) {
        els.push(<p>{topThree[i]}</p>);
    }
    return (
        <>
        <Card title={name} style={{ width: 240 }} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
            {els}
        </Card>
        </>
    );
}

export default FrontCard;