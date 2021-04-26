import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 text-white d-flex flex-column justify-content-center align-items-center text_area">
                        <h4>Get A Fit Body From</h4>
                        <h1>Fitness Freak</h1>
                        <Link to="/blogs" className="btn bg_custom_animate mt-4 text-white font-weight-bold">Know More</Link>
                    </div>
                </div>
            </div>
            <div className="overlay">

            </div>
        </div>
    );
};

export default Banner;