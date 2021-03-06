import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import Services from '../Shared/Services/Services';
import Banner from './Banner/Banner';
import ImageWithText from './ImageWithText/ImageWithText';
import Partners from './Partners/Partners';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Services/>
            <ImageWithText/>
            <Reviews/>
            <Partners/>
            <Footer/>
        </div>
    );
};

export default Home;