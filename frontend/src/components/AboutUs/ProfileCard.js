import React from 'react';
import { Card } from 'antd';
import './ProfileCard.css';

function ProfileCard(inputs) {
    return (
        <Card bordered={false}>
            <img class="profileImage" src={inputs.src}/>
            <h4 class="profileName">{inputs.name}</h4>
            <h5 class="profileYear">{inputs.year}</h5>
            <h5 class="profileEnd">{inputs.end}</h5>
        </Card>
    );
}

export default ProfileCard;