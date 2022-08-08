import React from 'react';
import Portfolio from '../../Components/Portfolio';
import Navbar from '../Shared/Navbar';

const OurPortfolio = () => {
    return (
        <div style={{backgroundColor:"#FBD062"}}>
            <Navbar></Navbar>
            <div className='min-h-screen'>
            <Portfolio></Portfolio>
            </div>
        </div>
    );
};

export default OurPortfolio;