import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import Sidebar from '../Shared/Sidebar/Sidebar';
import StripeCheckout from './StripeCheckout/StripeCheckout';

const CheckoutPage = () => {
    const { id } = useParams();
    const [service, setService] = useState({});
    const { name, price } = service;

    useEffect(() => {
        if(id !== ":id"){
            const url = `https://afternoon-ocean-70704.herokuapp.com/service/${id}`
            fetch(url)
                .then(res => res.json())
                .then(data => setService(data[0]))
        }
    }, [id])
    console.log(service)

    return (
        <section className="bg-white">
            <Navbar />
            <main className="d-flex" style={{ height: '100vh' }}>
                <Sidebar />
                <div className="ml-5 container-fluid  text-center">
                    {
                        name  ?
                            <div>
                                <h1 className="text-center mt-3">Checkout</h1>
                                <div className="p-lg-5 d-flex flex-column justify-content-center">
                                    <h3>{name}</h3>
                                    {
                                        price &&
                                        <h5>{price / 10}/Month</h5>
                                    }
                                    <StripeCheckout service={service} />
                                </div>
                            </div>
                            :
                            <div>
                                <h3 className="text-center mt-3">You didn't Selected any service</h3>
                            </div>
                    }
                </div>
            </main>
            <Footer />
        </section>
    );
};

export default CheckoutPage;