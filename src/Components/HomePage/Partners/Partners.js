import React from 'react';
import PartnersCard from './PartnersCard/PartnersCard';
import freelactics from '../../../Images/FreeLactics.png';
import athletic from '../../../Images/Athletic.png';
import Workout from '../../../Images/Workout master.png'

const Partners = () => {
    return (
        <section className="my-4 container">
            <div className=" my-4 text-center text-white">
                <h3 className="custom_animate">Partners</h3>
                <h1 className="m-5 text-danger">Our Trusted <span className="text-white">Partner's</span></h1>
            </div>
            <div className="row d-flex justify-content-center ">
                <PartnersCard img={freelactics} inst_name={'Freelactics'}/>
                <PartnersCard img={athletic} inst_name={'Lion Heart Athletics'} />
                <PartnersCard img={Workout} inst_name={'Workout Master'} />
            </div>
        </section>
    );
};

export default Partners;