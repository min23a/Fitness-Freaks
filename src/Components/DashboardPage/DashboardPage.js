import React, { useEffect, useState } from 'react';
import Sidebar from '../Shared/Sidebar/Sidebar';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import OrdersPage from '../OrdersPage/OrdersPage';
import jwt_decode from "jwt-decode";
import ManageOrder from '../Admin/ManageOrder/ManageOrder';

const DashboardPage = () => {
    const getMail = () => {
        const token = sessionStorage.getItem('token');
        if (!token) {
            return false;
        }
        const decodedToken = jwt_decode(token);
        return decodedToken.email;
    }
    const email = getMail();
    const [profile, setProfile] = useState({})
    const url = `https://afternoon-ocean-70704.herokuapp.com/adminRole/${email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProfile(data))
    }, [url])
    console.log(profile)
    return (
        <section className="bg-white">
            <Navbar />
            <main className="d-flex" style={{ height: '100vh' }}>
                <Sidebar />
                <div className="container-fluid text-center pt-5">
                    {
                        profile.role === 'admin' ?
                            <ManageOrder />
                            :
                            <OrdersPage />
                    }
                </div>
            </main>
            <Footer />
        </section>
    );
};

export default DashboardPage;