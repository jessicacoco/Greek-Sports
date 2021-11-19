import React from 'react';
import { useLocation } from 'react-router-dom';
import { Row, Col } from 'antd';
import Footer from '../Footer';
import './Result.css';
import ResultsTable from '../Home/ResultsTable';
import { readCSV, normalizeTableData, FSQuery, ClubAndSportQuery } from '../../utils/readCSV';

function Result(props) {
    // Reads the search options from the database (in this case the CSV file)
    const csvData = readCSV();
    var name = props.location.resultProps.name;
    var type = props.location.resultProps.type;
    if (type == 'fs') {
        var results = normalizeTableData(FSQuery(csvData, name, true));
    }
    else {
        var results = normalizeTableData(ClubAndSportQuery(csvData, name, true));
    }

    return (
        <>
        <Row>
            <Col span={20} offset={2}>
                <h1>{name}</h1>
            </Col>
        </Row>
        <Row>
            <Col span={20} offset={2}>
                <ResultsTable results={results} name={''}/>
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