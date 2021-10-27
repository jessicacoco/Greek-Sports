import React from 'react';
import { Row, Col } from 'antd';
import ContactUsForm from '../ContactUs/ContactUsForm';
import './ContactUs.css';

const style = {background: '#0092ff'};

function ContactUs() {
    return (
        <>
        <Row>
            <Col span={24}>
                <h1 class="header">HAVE SOME QUESTIONS?</h1>
            </Col>
        </Row>
        <Row gutter={[16,24]}>
            <Col span={8} offset={4}>
                <div class="contact-cols contact-icon-col">
                <img class="contact-icon" src="./ContactUsIcon.png"/>
                </div>
            </Col>
            <Col span={8}>
                <div class="contact-cols contact-form-col">
                    <ContactUsForm/>
                </div>
            </Col>
            <Col span={4}></Col>
        </Row>
        </>
    );
}

export default ContactUs;