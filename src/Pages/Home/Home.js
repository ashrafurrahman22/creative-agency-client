import React from 'react';
import Customer from '../../Components/Customer';
import Navbar from '../Shared/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
           <Customer></Customer>
        </div>
    );
};

export default Home;