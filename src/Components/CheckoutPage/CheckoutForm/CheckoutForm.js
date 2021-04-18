import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { dataContext } from '../../../App';
import stripeIcon from "../../../Images/stripe.png";
import './CheckoutForm.css';
import jwt_decode from "jwt-decode";

const CheckoutForm = ({ service }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { users } = useContext(dataContext);
    const [user,setUser] = users;

    const getMail = () => {
        const token = sessionStorage.getItem('token');
        if (!token) {
            return false;
        }
        const decodedToken = jwt_decode(token);
        setUser(decodedToken)
    }
console.log(user)
    const [order, setOrder] = useState({
        name: '',
        email: '',
        orderStatus : 'pending',
        paymentId: '',
        services: {}
    })

    const handleOrder = () => {
        getMail();
        const newOrder = { ...order };
        newOrder.name = user.name;
        newOrder.email = user.email;
        newOrder.services = service;
        setOrder(newOrder);
    }

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            const newOrder = { ...order };
            newOrder.paymentId = paymentMethod.id;
            if(newOrder.paymentId !== null){
                setOrder(newOrder);
            }
            console.log(order);
        }
    };
    useEffect(() => {
        if (order.paymentId !== '' && order.name !== '') {
            const url = 'https://afternoon-ocean-70704.herokuapp.com/addOrder'
            axios.post(url, order)
                .then(res => console.log(res.data))
        }
    }, [order])
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '14px',
                            color: 'black',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn bg-white text-dark font-weight-bold my-4 d-flex align-items-center card_shadow" onClick={handleOrder} type="submit" disabled={!stripe}>
                <img src={stripeIcon} style={{height : '30px'}} alt="" className="img-fluid"/> Pay
            </button>
        </form>
    );
};

export default CheckoutForm;