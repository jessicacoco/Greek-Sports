import React, { useState } from 'react';
import { Row, Col, Tabs } from 'antd';
import ResultsTable from '../ResultsTable';
import SearchCard from '../Home/SearchCard';
import Footer from '../Footer';
import './Home.css';

const { TabPane } = Tabs;

function Home() {
    const [results, setResults] = useState([]);
    const [name, setName] = useState('');

    function setSearchResults(values) {
        setResults(values);
    }

    function setSearchName(value) {
        setName(value);
    }

    function clear(key) {
        setName('');
        setResults([]);
        console.log('cleared',key);
    }


    if (name.length == 0) {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Tabs defaultActiveKey="1" centered onChange={clear}>
                            <TabPane tab="Search by Fraternity/Sorority" key="1">
                                <SearchCard setSearchResults={setSearchResults} setSearchName={setSearchName} type={"greek"}/>
                            </TabPane>
                            <TabPane tab="Search by Varsity/Club Sport" key="2">
                                <SearchCard setSearchResults={setSearchResults} setSearchName={setSearchName} type={"sports"}/>
                            </TabPane>
                            <TabPane tab="Search by Club" key="3">
                                <SearchCard setSearchResults={setSearchResults} setSearchName={setSearchName} type={"clubs"}/>
                            </TabPane>
                        </Tabs>
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
    else {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Tabs defaultActiveKey="1" centered onChange={clear}>
                            <TabPane tab="Search by Fraternity/Sorority" key="1">
                                <SearchCard setSearchResults={setSearchResults} setSearchName={setSearchName} type={"greek"}/>
                            </TabPane>
                            <TabPane tab="Search by Varsity/Club Sport" key="2">
                                <SearchCard setSearchResults={setSearchResults} setSearchName={setSearchName} type={"sports"}/>
                            </TabPane>
                            <TabPane tab="Search by Club" key="3">
                                <SearchCard setSearchResults={setSearchResults} setSearchName={setSearchName} type={"clubs"}/>
                            </TabPane>
                        </Tabs>
                    </Col>
                </Row>
                <Row>
                    <Col span={20} offset={2}>
                        <ResultsTable results={results} name={name}/>
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
}

export default Home;