import React from 'react';
import { Row, Col, Tabs } from 'antd';
import FSSearchCard from '../FSSearchCard';
import SportSearchCard from '../SportSearchCard';
import ClubSearchCard from '../ClubSearchCard';
import './Home.css';

const { TabPane } = Tabs;

function Home() {
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
                        <FSSearchCard/>
                    </TabPane>
                    <TabPane tab="Search by Varsity/Club Sport" key="2">
                        <SportSearchCard />
                    </TabPane>
                    <TabPane tab="Search by Club" key="3">
                        <ClubSearchCard />
                    </TabPane>
                </Tabs>
            </Col>
        </Row>
    </>
  );
}

export default Home;