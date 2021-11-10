import React from 'react';
import { Row, Col } from 'antd';
import Footer from '../Footer';
import './Result.css';

function Result({name}) {
    return (
        <>
        <Row>
            <Col span={24}>
                <h1>{name}</h1>
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