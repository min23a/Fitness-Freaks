import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewCard.css'

const ReviewCard = ({review}) => {
    const {name,location,ratings,description} = review;
    return (
        <div className="bg-dark rounded review_shadow text-white m-3 col-lg-3 col-md-4 col-sm-6 p-3">
            <h3>{name}</h3>
            <div className="row">
                <div className="col-6">
                    <small>{location}</small>
                    <p>{description}</p>
                </div>
                <div className="col-6">
                    <p className="text-right pr-2">{ratings}/5 <FontAwesomeIcon className="text-warning" icon={faStar}/></p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;