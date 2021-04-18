import React from 'react';
import { Link } from 'react-router-dom';

const Footer =() => {
    return (
        <footer className="bg-dark text-white text-center d-flex flex-column align-items-center">
            <div className="w-100 review_shadow ">
                <ul className="navbar-nav m-auto d-flex flex-row justify-content-center">
                    <li className="nav-item mx-3">
                        <Link className="nav-link text-white" to="/home">Home</Link>
                    </li>
                    <li className="nav-item mx-3">
                        <Link className="nav-link text-white" to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item mx-3">
                        <Link className="nav-link text-white" to="/blogs">Blog's</Link>
                    </li>
                </ul>
            </div>
            <div className="container">
                <p className="p-3">This website Designed and Developed by <br/> Minhazul Abedin.</p>
            </div>
            <div className="w-100 review_shadow">
                <p>&copy; Copyright 2021. <br/> All right Reserved To MINHAZUL ABEDIN</p>
            </div>
        </footer>
    );
};

export default Footer;