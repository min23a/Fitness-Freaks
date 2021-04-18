import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12 text-white d-flex flex-column justify-content-center align-items-center text_area">
                        <h1>Fitness Freak</h1>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium nemo mollitia fuga iure repudiandae architecto nesciunt, quaerat rerum eveniet facere molestiae doloremque adipisci illo error repellat ducimus impedit necessitatibus culpa. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, optio.
                        </p>
                        <Link to="/blogs" className="btn bg_custom_animate mt-4 text-white font-weight-bold">Know More</Link>
                    </div>

                    <div className="col-md-6 col-sm-12">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;