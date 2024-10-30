// src/components/Navbar.js
import React, { useState } from 'react';
import './FirstElement.css';

const FirstElement = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <h1 className="navbar-logo">MyWebsite</h1>
            <ul className={`nav-links ${isMobileMenuOpen ? "nav-links-mobile" : ""}`}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? "✖" : "☰"}
            </button>
        </nav>
    );
};

export default FirstElement;
