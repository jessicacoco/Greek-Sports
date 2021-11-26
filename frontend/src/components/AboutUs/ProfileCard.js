import React from 'react';
import { Card } from 'antd';
import './ProfileCard.css';

function ProfileCard(inputs) {
    return (
        <Card bordered={false}>
            <img className="profileImage" src={inputs.src} alt="Profile"/>
            <h4 className="profileName">{inputs.name}</h4>
            <h5 className="profileYear">{inputs.year}</h5>
            <h5 className="profileEnd">{inputs.end}</h5>
        </Card>
    );
}

export default ProfileCard;