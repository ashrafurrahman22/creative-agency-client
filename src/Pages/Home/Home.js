import React from 'react';
import Carousel from '../../Components/Carousel';
import Customer from '../../Components/Customer';
import Feedback from '../../Components/Feedback';
import Header from '../../Components/Header';
import Services from '../../Components/Services';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import '../../Styles/Navbar.css'

const Home = () => {
    return (
        <div style={{fontFamily:"poppins", letterSpacing:"2px"}}>
            
            <div id='nav'>
            <Navbar></Navbar>
            <Header></Header>
            </div>

           <Customer></Customer>
           <Services></Services>
           <Carousel></Carousel>
           <Feedback></Feedback>
           <Footer></Footer>
        </div>
    );
};

export default Home;