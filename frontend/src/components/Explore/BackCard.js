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
        let name = data[i][0]
        els.push(<Link to={{
            pathname:"/result", 
            resultProps:{
                type: 'cs',
                name: name
            } }}>
                <p>{num}. {name}</p>
            </Link>
            );
        num++;
    }

    return (
        <>
        <Card title={name} style={{height: '240px'}}>
            {els}
            <br></br>
            <Link to={{
                pathname:"/result", 
                resultProps:{
                    type: 'fs',
                    name: name
                }
            }}
            >
                <Button type="primary" shape="round">
                    More Info
                </Button>
            </Link>
        </Card>
        </>
    );
}

export default BackCard;