import axios from 'axios';
import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const AddReview = () => {
    const [review, setReview] = useState({});

    const handleBlur = (e) => {
        const newReview = { ...review };
        newReview[e.target.name] = e.target.value;
        setReview(newReview);
    }
    const handleSubmit = (e) => {
        if (review.name !== '') {
            axios.post('https://afternoon-ocean-70704.herokuapp.com/addReview', review)
                .then(res => console.log(res))
        }
        e.preventDefault();
    }
    return (
        <section className="bg-white">
            <Navbar />
            <main className="d-flex" style={{ height: '100vh' }}>
                <Sidebar />
                <form className=" m-5">
                    <input onBlur={handleBlur} type="text" name="name" id="profileName" placeholder="Name" required /><br /><br />
                    <input onBlur={handleBlur} type="text" name="location" id="location" placeholder="Location" required /><br /><br />
                    <input onBlur={handleBlur} type="number" name="ratings" id="rating" placeholder="Ratings 0-5" required /><br /><br />
                    <input onBlur={handleBlur} type="text" name="description" id="description" placeholder="Describe Experience (optional)" /><br /><br />
                    <button onClick={handleSubmit} className="btn bg_custom_animate">Submit</button>
                </form>
            </main>
            <Footer />
        </section>
    );
};

export default AddReview;