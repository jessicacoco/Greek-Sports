import React from 'react';
import { Card } from 'antd';
import './FrontCard.css';

const { Meta } = Card;


function FrontCard({name, letters}) {
    return (
        <>
        <Card bordered={true} title={<div class="letters">{letters}</div>} class="front-card" style={{height: '240px'}}>
            <div class="front-card-name">
                {name}
            </div>
        </Card>
        </>
    );
}

export default FrontCard;