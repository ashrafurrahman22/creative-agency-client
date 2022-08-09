import React from 'react';
import Portfolio from '../../Components/Portfolio';
import Navbar from '../Shared/Navbar';
import '../../Styles/Portfolio.css';
import OurClients from '../../Components/OurClients';

const OurPortfolio = () => {
    return (
        <div id='porto'>
            <Navbar></Navbar>
            <div>
            <Portfolio></Portfolio>
            </div>
            <div className='px-20 py-20 rounded-xl'>
            <OurClients></OurClients>
            </div>
        </div>
    );
};

export default OurPortfolio;