import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const stripePromise = loadStripe('pk_test_51IeCduGbksFGaBSKgfZYQcANp3A8WWqXHyusxdxMLkSCnPLp4AbPoRk89OOS2hxOUeWBi7uDSkhxX6M5tA1h5cig00EUKSByaw');

const StripeCheckout = ({service}) => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm service={service}/>
        </Elements>
    );
};

export default StripeCheckout;