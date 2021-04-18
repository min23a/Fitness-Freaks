import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard/ServiceCard';
import './Services.css';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(() => {
        fetch('https://afternoon-ocean-70704.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <section className=" my-4 container">
            <div className=" my-4 text-center text-white">
                <h3 className="custom_animate">Services</h3>
                <h1 className="m-5">WE <span className="text-danger">OFFER</span></h1>
            </div>
            <div className="row d-flex justify-content-center ">
                {
                    services.map(service => <ServiceCard key={service._id} service={service} />)
                }
            </div>
        </section>
    );
};

export default Services;