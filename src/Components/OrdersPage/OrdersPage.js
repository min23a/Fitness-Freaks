import React, { useContext, useEffect, useState } from 'react';
import OrderCard from './OrderCard/OrderCard';
import jwt_decode from "jwt-decode";
import { dataContext } from '../../App';

const OrdersPage = () => {
    const { users } = useContext(dataContext);
    const [user] = users;
    const [orders, setOrders] = useState([])
    const [email, setEmail] = useState({})
    const mail = user.email || email;
    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (!token) {
            return false;
        }
        const decodedToken = jwt_decode(token);
        setEmail(decodedToken.email)
    }, [])

    useEffect(() => {
        fetch('https://afternoon-ocean-70704.herokuapp.com/orders', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ mail })
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [mail])
    return (
        <section className="bg-white m-3 row">
            {
                orders !== [] ?
                orders.map(order => <OrderCard key={order._id} order={order}/>)
                :
                <div></div>
            }
        </section>
    );
};

export default OrdersPage;