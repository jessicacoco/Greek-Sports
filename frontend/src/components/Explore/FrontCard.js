import React from 'react';
import { Card } from 'antd';
import './FrontCard.css';

const { Meta } = Card;


function FrontCard({name, letters}) {
    return (
        <>
        <Card bordered={true} title={letters} class="front-card">
            {name}
        </Card>
        </>
    );
}

export default FrontCard;