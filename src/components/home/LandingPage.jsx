import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import "./LandingPage.css"
import "./PageComponents.css"
import TeamPage from './TeamPage';
import MailingList from './MailingList';
import OscillatingWave from './OscillatingWave';
import AnimatedText from './AnimatedText';

import castImg from "../../assets/cast.png";
import FooterComponent from '../sitewide/Footer';

function LandingPage() {
    const [showFullPage, setShowFullPage] = useState(false); // State to manage visibility of the extra text
    
    return (
        <Container fluid className="landing-container p-0" style={{backgroundColor: "#1e1e1e"}}>
            <Row className="title-block m-0">
                <Col xs={{ span: 12, order: 1 }} lg={{ span: 8, order: 0 }}>
                    <h1>Gradient</h1>
                    <p>Fitting casts around your life, not the other way around.</p>
                    <Link to="/order"><button className="generic-btn">Reserve Yours</button></Link>
                </Col>
                <Col xs={{ span: 12, order: 0 }} lg={{ span: 4, order: 1 }}>
                    <img src={castImg} alt="Cast" className="cast-img" />
                </Col>
            </Row>
            <Row className="main-content-container m-0">
            <OscillatingWave />
            <Col className="m-0 p-3">
                <AnimatedText showFullPage={showFullPage} setShowFullPage={setShowFullPage} />
                <div hidden={!showFullPage}>
                    <TeamPage />
                    <MailingList />
                </div>
            </Col>
            </Row>

            <div className="manual-footer">
                <FooterComponent />
            </div>
        </Container>
    );
};

export default LandingPage; 