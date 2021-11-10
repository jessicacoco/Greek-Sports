import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    return (
        <>
            <nav className="navbar">
                    <ul class="nav-center">
                        <li class="nav-link nav-left">
                            <Link to="/" className="navbar-logo">
                                <img class="logo-image" src="./GS_Logo 1.jpg"></img>
                            </Link>
                        </li>
                        <li class="nav-link">
                            <Link to="/contact-us">
                                <h3 className="nav-links">Contact Us</h3>
                            </Link>
                        </li>
                        <li class="nav-link">
                            <Link to="/about-us">
                                <h3 className="nav-links">About Us</h3>
                            </Link>
                        </li>
                        <li class="nav-link">
                            <Link to="/explore">
                                <h3 className="nav-links">Explore</h3>
                            </Link>
                        </li>
                        <li class="nav-link">
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