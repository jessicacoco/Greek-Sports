import React from 'react';
import { Row, Col } from 'antd';
import ContactUsForm from '../ContactUs/ContactUsForm';
import Footer from '../Footer';
import './ContactUs.css';

const style = {background: '#0092ff'};

function ContactUs() {
    return (
        <div class="contact-us">
        <Row>
            <Col span={24}>
                <h1 class="header">HAVE SOME QUESTIONS?</h1>
            </Col>
        </Row>
        <Row gutter={[16,24]}>
            <Col span={8} offset={4}>
                <div class="contact-cols contact-icon-col">
                <img class="contact-icon" src="./ContactUs_transparent.png"/>
                </div>
            </Col>
            <Col span={6}>
                <div class="contact-cols contact-form-col">
                    <ContactUsForm/>
                </div>
            </Col>
            <Col span={4}></Col>
        </Row>
        <Row>
            <Col span={24}>
                <Footer />
            </Col>
        </Row>
        </div>
    );
}

export default ContactUs;