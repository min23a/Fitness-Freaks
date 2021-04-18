import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light navigation_bar">
            <Link className="navbar-brand font-weight-bolder custom_animate" to="/">FITNESS FREAK</Link>
            <button className="navbar-toggler bg_custom_animate" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon text-white"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item mr-4">
                        <Link className="nav-link text-white" to="/home">Home</Link>
                    </li>
                    <li className="nav-item mr-4">
                        <Link className="nav-link text-white" to="/blogs">Blog's</Link>
                    </li>
                    <li className="nav-item mr-4">
                        <Link className="nav-link text-white" to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item mr-4">
                        <Link className="nav-link text-white" to="/login">Log In</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;