import React, { useState } from 'react';
import { Row, Col, Tabs } from 'antd';
import FSSearchCard from '../FSSearchCard';
import SportSearchCard from '../SportSearchCard';
import ClubSearchCard from '../ClubSearchCard';
import SearchCard from '../SearchCard';
import './Home.css';

const { TabPane } = Tabs;

function Home() {
  const [results, setResults] = useState([]);

  function setSearchResults(values) {
      setResults(values);
  }

  return (
    <>
        <Row justify="center">
            <Col span={8}>
                <h1>Welcome to Greek Sports</h1>
            </Col>
        </Row>
        <Row justify="center">
            <Col span={16}>
                <Tabs defaultActiveKey="1" centered>
                    <TabPane tab="Search by Fraternity/Sorority" key="1">
                        <FSSearchCard />
                        <SearchCard results={results} setSearchResults={setSearchResults} type={"greek"}/>
                    </TabPane>
                    <TabPane tab="Search by Varsity/Club Sport" key="2">
                        <SportSearchCard />
                        <SearchCard results={results} type={"sports"}/>
                    </TabPane>
                    <TabPane tab="Search by Club" key="3">
                        <ClubSearchCard />
                        <SearchCard results={results} type={"clubs"}/>
                    </TabPane>
                </Tabs>
            </Col>
        </Row>
    </>
  );
}

export default Home;