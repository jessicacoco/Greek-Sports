import React, { useState } from 'react';
import { Row, Col, Tabs } from 'antd';
import FSSearchCard from '../FSSearchCard';
import SportSearchCard from '../SportSearchCard';
import ClubSearchCard from '../ClubSearchCard';
import SearchCard from '../SearchCard';
import ResultsTable from '../ResultsTable';
import './Home.css';

const { TabPane } = Tabs;

function Home() {
    const [results, setResults] = useState([]);

    function setSearchResults(values) {
        setResults(values);
    }

    if (results.length != 0) {
        return (
            <>
                <Row justify="center">
                    <Col span={5}>
                        <h1>Welcome to Greek Sports</h1>
                    </Col>
                </Row>
                <Row justify="center">
                    <Col span={18}>
                        <Tabs defaultActiveKey="1" centered>
                            <TabPane tab="Search by Fraternity/Sorority" key="1">
                                <SearchCard results={results} setSearchResults={setSearchResults} type={"greek"}/>
                            </TabPane>
                            <TabPane tab="Search by Varsity/Club Sport" key="2">
                                <SearchCard results={results} type={"sports"}/>
                            </TabPane>
                            <TabPane tab="Search by Club" key="3">
                                <SearchCard results={results} type={"clubs"}/>
                            </TabPane>
                        </Tabs>
                    </Col>
                </Row>
            </>
        );
    }
    else {
        return (
            <>
                <Row justify="center">
                    <Col span={5}>
                        <h1>Welcome to Greek Sports</h1>
                    </Col>
                </Row>
                <Row justify="center">
                    <Col span={18}>
                        <Tabs defaultActiveKey="1" centered>
                            <TabPane tab="Search by Fraternity/Sorority" key="1">
                                <SearchCard results={results} setSearchResults={setSearchResults} type={"greek"}/>
                            </TabPane>
                            <TabPane tab="Search by Varsity/Club Sport" key="2">
                                <SearchCard results={results} setSearchResults={setSearchResults} type={"sports"}/>
                            </TabPane>
                            <TabPane tab="Search by Club" key="3">
                                <SearchCard results={results} setSearchResults={setSearchResults} type={"clubs"}/>
                            </TabPane>
                        </Tabs>
                    </Col>
                </Row>
                <Row>
                    <Col span={20} offset={2}>
                        <ResultsTable results={results}/>
                    </Col>
                </Row>
            </>
        );
    }
}

export default Home;