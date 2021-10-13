import React from 'react';
import { Row, Col } from 'antd';
import SearchCard from '../SearchCard';
import './Home.css';

function Home() {
  return (
    <>
        <Row justify="center">
            <Col span={8}>
                <h1>Welcome to Greek Sports</h1>
            </Col>
        </Row>
        <Row justify="center">
            <Col span={16}>
                <SearchCard />
            </Col>
        </Row>
    </>
  );
}

export default Home;