import React from 'react';
import FrontCard from '../Explore/FrontCard';
import BackCard from '../Explore/BackCard';
import Footer from '../Footer';
import { Row, Col } from 'antd';
import './Explore.css';
import { readCSV, allFSExploreQuery } from '../../utils/readCSV';

function Explore() {

    // call FSExplore query here
    const csvData = readCSV();
    let data = allFSExploreQuery(csvData);

    var cards = [];
    for (let i = 0; i < data.length; i++) {
        cards.push(
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <FrontCard name={data[i][0]} letters={data[i][1]}/>
                </div>
                <div class="flip-card-back">
                    <BackCard name={data[i][0]}/>
                </div>
            </div>
        </div>);
    }
    return (
        <>
        <div class="main">
        {cards}
        </div>
        <Row>
            <Col span={24}>
                <Footer />
            </Col>
        </Row>
        </>
    );
}

export default Explore;