import React from 'react';
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import './Navbar.css';
import logo from './../../assets/logo.png';

const NavbarComponent = () => {
    return (
        <Navbar id="nav" collapseOnSelect sticky="top" expand="lg" className="navbar-expand-sm px-3">
            <Link to="/"><img className="navbar-logo" src={logo} alt="logo"/></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav>
                    <Nav.Link href="/order" id="reserve-btn">Reserve Yours</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarComponent;