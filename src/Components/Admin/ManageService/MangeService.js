import React, { useEffect, useState } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';

const MangeService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://afternoon-ocean-70704.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handleDelete = (e) => {
        const serviceId = e.target.parentElement.id;
        fetch(`https://afternoon-ocean-70704.herokuapp.com/delete/${serviceId}`, { method: 'DELETE' })
        .then(res => console.log(res))
        document.getElementById(serviceId).remove()
    }

    return (
        <section className="bg-white">
            <Navbar />
            <main className="d-flex">
                <Sidebar />
                <div className="container-fluid pt-5">
                    {
                        services.map(service =>
                            <li id={service._id} style={{listStyle : 'none'}}>
                                Name : {service.name},    Price : {service.price}
                                <button onClick={handleDelete} className=" m-3 btn btn-danger">x</button>
                            </li>)
                    }
                </div>
            </main>
            <Footer />
        </section>
    );
};

export default MangeService;