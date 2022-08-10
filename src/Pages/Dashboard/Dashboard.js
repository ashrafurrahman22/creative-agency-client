import { faCartShopping, faListDots, faMessage, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';

const Dashboard = () => {
    return (
        <div style={{backgroundColor:"#FBD062"}}>
            
            <div>
                <Navbar></Navbar>
            </div>

            <div style={{fontFamily:"poppins"}} class="drawer drawer-mobile px-20 pb-14 pt-5">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle bg-base-200" />
        <div class="drawer-content card card-body shadow-2xl bg-base-300">
            <h2 style={{fontFamily:"inter"}} className='text-5xl text-left ml-3 my-3 font-semibold'>Dashboard</h2>
            <hr style={{height:"2px"}} className='bg-black text-black' />
            <Outlet></Outlet>
        </div>
        <div class="drawer-side card card-body shadow-2xl bg-base-300 mr-6">
            <label for="dashboard-sidebar" class="drawer-overlay"></label>
            <ul style={{fontFamily:"poppins", letterSpacing:"1px"}} class="menu p-4 overflow-y-auto w-48 gap-5 text-white text-base-content">
            <FontAwesomeIcon className='text-5xl' icon={faUser} />
                <li><Link to="/dashboard" className='btn font-medium hover:btn-primary text-white'>
                    <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                    Orders</Link></li>
                <li><Link to="/dashboard/servicelist" className='btn hover:btn-primary text-white font-medium'>
                    <FontAwesomeIcon icon={faListDots}></FontAwesomeIcon>
                    Service List</Link></li>
                <li><Link to="/dashboard/review" className='btn  hover:btn-primary text-white font-medium'>
                    <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
                    Review</Link></li>
            </ul>
        </div>
    </div>
        </div>
    );
};

export default Dashboard;