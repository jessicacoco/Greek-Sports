import React from 'react';
import FrontCard from '../Explore/FrontCard';
import './Explore.css';

function Explore() {
    let data = [['Pi Beta Phi', 'RPI Women\'s Soccer', 'Outdoors Club', 'Skiing'],
    ['Rho Gam', 'RPI Women\'s Soccer', 'Outdoors Club', 'Skiing'],
    ['Alpha Phi', 'RPI Women\'s Soccer', 'Outdoors Club', 'Skiing']];

    var cards = [];
    for (let i = 0; i < data.length; i++) {
        cards.push(<FrontCard name={data[i][0]} topThree={data[i]}/>)
    }
    return (
        <>
        {cards}
        </>
    );
}

export default Explore;