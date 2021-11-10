import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    return (
        <>
            <nav className="navbar">
                    <ul className="nav-center">
                        <li className="nav-link nav-left">
                            <Link to="/" className="navbar-logo">
                                <img className="logo-image" src="./GS_Logo 1.jpg" alt="Application logo"></img>
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/contact-us">
                                <h3 className="nav-links">Contact Us</h3>
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/about-us">
                                <h3 className="nav-links">About Us</h3>
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/explore">
                                <h3 className="nav-links">Explore</h3>
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/">
                                <h3 className="nav-links">Search</h3>
                            </Link>
                        </li>
                    </ul>
            </nav>
        </>
    )
};

export default Navbar;