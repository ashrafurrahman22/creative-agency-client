import React from 'react';
import Customer from '../../Components/Customer';
import Services from '../../Components/Services';
import Navbar from '../Shared/Navbar';

const Home = () => {
    return (
        <div style={{fontFamily:"poppins", letterSpacing:"2px"}}>
            <Navbar></Navbar>
           <Customer></Customer>
           <Services></Services>
        </div>
    );
};

export default Home;