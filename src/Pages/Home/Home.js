import React from 'react';
import Carousel from '../../Components/Carousel';
import Customer from '../../Components/Customer';
import Feedback from '../../Components/Feedback';
import Services from '../../Components/Services';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const Home = () => {
    return (
        <div style={{fontFamily:"poppins", letterSpacing:"2px"}}>
            <Navbar></Navbar>
           <Customer></Customer>
           <Services></Services>
           <Carousel></Carousel>
           <Feedback></Feedback>
           <Footer></Footer>
        </div>
    );
};

export default Home;