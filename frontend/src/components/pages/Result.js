import React from 'react';
import { useLocation } from 'react-router-dom';
import { Row, Col } from 'antd';
import Footer from '../Footer';
import './Result.css';
import ResultsTable from '../Home/ResultsTable';
import { activityQuery, readCSV, allFSQuery, normalizeTableData, FSQuery, ClubAndSportQuery } from '../../utils/readCSV';

function Result(props) {
    // Reads the search options from the database (in this case the CSV file)
    const csvData = readCSV();
    let results = normalizeTableData(FSQuery(csvData, props.location.resultProps.name.name, true));
    console.log('here')

    return (
        <>
        <Row>
            <Col span={20} offset={2}>
                <h1>{props.location.resultProps.name.name}</h1>
            </Col>
        </Row>
        <Row>
            <Col span={20} offset={2}>
                <ResultsTable results={results} name={''}/>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <Footer />
            </Col>
        </Row>
        </>
    );
}

export default Result;