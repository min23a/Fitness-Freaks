import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({service}) => {
    const {name,img,description,price,_id} = service;
    return (
        <div className="card bg-dark card_shadow text-white m-3 col-lg-3 col-md-4 col-sm-6">
            <img className="card-img-top mt-3 img-fluid card_img" src={img} alt="" />
            <div className="card-body text-center">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <h5 className="card-title">$ {price /10}<span>/Month</span></h5>
                <Link to={"/checkout/" + _id} className="btn text-white bg_custom_animate font-weight-bold">Get Subscription</Link>
            </div>
        </div>
    );
};

export default ServiceCard;