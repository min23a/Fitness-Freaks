import React from 'react';
import './PartnerCard.css'

const PartnersCard = ({ img, inst_name }) => {
    return (
        <div className="container my-3 col-md-4 col-sm-12">
            <div className="bg-dark rounded d-flex flex-column p-3 align-items-center box_shadow">
                <img className="img-fluid rounded-circle partner_logo" src={img} alt="" />
                <h4 className="text-white mt-3">{inst_name}</h4>
            </div>
        </div>
    );
};

export default PartnersCard;