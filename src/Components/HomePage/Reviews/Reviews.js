import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard/ReviewCard';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://afternoon-ocean-70704.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className=" my-4 container">
            <div className=" my-4 text-center text-white">
                <h3 className=" text-danger">Reviews</h3>
                <h1 className="m-5">Hear from our <span className="custom_animate">Customer</span></h1>
            </div>
            <div className="row d-flex justify-content-center ">
                {
                    reviews.map(review => <ReviewCard key={review._id} review={review} />)
                }
            </div>
        </section>
    );
};

export default Reviews;