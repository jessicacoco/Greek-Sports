import React from 'react';

import { Card } from 'antd';

import './ProfileCard.css';

// Returns a ProfileCard for the AboutUs page.
function ProfileCard(props) {
    return (
        <Card bordered={false}>
            <img className="profileImage" src={props.src} alt={"Profile image for "+props.name} />
            <h4 className="profileName">{props.name}</h4>
            <h5 className="profileYear">{props.year}</h5>
            <h5 className="profileEnd">{props.end}</h5>
        </Card>
    );
}

export default ProfileCard;