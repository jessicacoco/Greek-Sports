import React from 'react';
import FrontCard from '../Explore/FrontCard';
import BackCard from '../Explore/BackCard';
import './Explore.css';

function Explore() {

    let data = [['Pi Beta Phi', 'ΠΒΦ', 'RPI Women\'s Soccer', 'Outdoors Club', 'Skiing'],
    ['Alpha Gamma Delta', 'ΑΓΔ', 'RPI Women\'s Soccer', 'Outdoors Club', 'Skiing'],
    ['Alpha Phi', 'ΑΦ', 'RPI Women\'s Soccer', 'Outdoors Club', 'Skiing']];

    var cards = [];
    for (let i = 0; i < data.length; i++) {
        cards.push(
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <FrontCard name={data[i][0]} letters={data[i][1]}/>
                </div>
                <div class="flip-card-back">
                    <BackCard name={data[i][0]} topThree={data[i]}/>
                </div>
            </div>
        </div>);
    }
    return (
        <>
        {cards}
        </>
    );
}

export default Explore;