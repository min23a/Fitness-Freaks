import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const stripePromise = loadStripe('pk_test_51HjSCtJujGnxGHkbIqZReFtBr4IganquZaIwNK0ILo8IsXMT9qKwsD1Z3Ie1tzqDwUzOf6TVEhtcyWUH8oTcsIC700pUh9x0vl');

const StripeCheckout = ({service}) => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm service={service}/>
        </Elements>
    );
};

export default StripeCheckout;