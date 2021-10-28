import React, { useState } from 'react';
import { Row, Col, Tabs } from 'antd';
import SearchCard from '../Home/SearchCard';
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

export default Home;