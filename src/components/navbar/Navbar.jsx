import React from 'react';
import './Navbar.css';
import logo from './../../assets/logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <a href="/"><img className="navbar-logo" src={logo} alt="logo"/></a>
        </div>
    );
};

export default Navbar;