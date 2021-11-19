import React from 'react';
import { Link } from "react-router-dom";
import { Card, Button } from 'antd';
import { FSQueryTopThree, readCSV } from '../../utils/readCSV';
import './BackCard.css';

function BackCard({name}) {
    var els = [];
    var num = 1;
    // call top 3 query here using name as input
    const csvData = readCSV();
    let data = FSQueryTopThree(csvData, name, false);

    for (let i = 0; i < data.length; i++) {
        els.push(<p>{num}. {data[i][0]}</p>);
        num++;
    }

    return (
        <>
        <Card title={name} style={{height: '240px'}}>
            {els}
            <Link to={{
                pathname:"/result", 
                resultProps:{
                    name: {name}
                } }}>
                <Button type="primary" shape="round">
                    More Info
                </Button>
            </Link>
        </Card>
        </>
    );
}

export default BackCard;