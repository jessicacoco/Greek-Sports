import React from 'react';

import { Row, Col } from 'antd';

import ResultsTable from '../Home/ResultsTable';
import Footer from '../Footer';
import { readCSV, normalizeTableData, FSQuery, ClubAndSportQuery } from '../../utils/readCSV';

import './Result.css';

/* Creates Result page using properties name to search for and type of search 
passed to it on component call. Calls ResultsTable to show search results. */
function Result(props) {
    // Reads the search options from the database (in this case the CSV file).
    const csvData = readCSV();
    var name = props.location.resultProps.name;
    var type = props.location.resultProps.type;
    if (type == 'fs') {
        var results = normalizeTableData(FSQuery(csvData, name, true));
    } else {
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