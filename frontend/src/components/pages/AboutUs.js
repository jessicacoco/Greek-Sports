import React from 'react';
import { Row, Col } from 'antd';
import './AboutUs.css';
import ProfileCard from '../AboutUs/ProfileCard';

function AboutUs() {
    var paragraph = "College is stressful enough as it is, but not knowing anyone can add even more stress. Many students worry about how they will find friends for the next four years, and this application plans to solve that. Joining a fraternity or sorority can be a great way to meet people and make lots of friends for incoming students, but with so many choices, it can be stressful to choose just one. Typically, students feel comfortable around kids that play or like similar sports to them, which can be a great start to finding new friends. We built Greek Sports to allow students to do just that: find Greek life that fits them, and later, find sports and clubs that their greek organization is involved in to further connect with other members.";
    var endb = "Backend Developer";
    var endf = "Frontend Developer";
    var year = "Class of 2022";
    return (
        <>
            <Row>
                <Col>
                    <h1>Who We Are</h1>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <p>{paragraph}</p>
                </Col>
            </Row>
            <Row>
                <Col span={4}>
                    <ProfileCard name="Chyna Cobbs" end={endb} year={year} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>
                </Col>
                <Col span={4}>
                    <ProfileCard name="Jessica Coco" end={endb} year={year} src="./JessicaCoco.jpg"/>
                </Col>
                <Col span={4}>
                <ProfileCard name="Jonathan Psaras" end={endb} year={year} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>
                </Col>
                <Col span={4}>
                <ProfileCard name="Emma Skantze" end={endf} year={year} src="./EmmaSkantze.jpg"/>
                </Col>
                <Col span={4}>
                <ProfileCard name="Erin Song" end={endf} year={year} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>
                </Col>
                <Col span={4}>
                <ProfileCard name="Chace Woods" end={endf} year={year} src="./ChaceWoods.jpg"/>
                </Col>
            </Row>
        </>
    );
}

export default AboutUs;