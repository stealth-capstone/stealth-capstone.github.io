import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from './../../assets/logo_cropped.png';
import './Footer.css';

// TOOD: change the logo so that it doesn't have padding in it

const FooterComponent = () => {
    return (
        <footer>
            <Container fluid className="footer">
                <Row className="footer-row">
                    <Col className="footer-col" xs={12} lg={4}>
                        <img src={logo} alt="Company Logo" className="footer-logo" />
                        <p>Gradient by Morph &#169; 2025</p>
                    </Col>
                    <Col className="footer-col" xs={12} lg={4}>
                        <h4>Contact Us</h4>
                        <div className="divider" style={{width: '5rem'}}></div>
                        <a href="mailto:a6kalia@uwaterloo.ca"><p>gradientbymorph@gmail.com</p></a>
                    </Col>
                    <Col className="footer-col" xs={12} lg={4}>
                        <h4>Links</h4>
                        <div className="divider"></div>
                        <Link to="/"><p>Home</p></Link>
                        <Link to="/order"><p>Reserve Yours</p></Link>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default FooterComponent;