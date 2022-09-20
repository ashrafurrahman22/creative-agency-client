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

            <div className='rounded'>
            <div style={{fontFamily:"aleo"}} class="drawer drawer-mobile px-14 pb-14 pt-5">

<input id="dashboard-sidebar" type="checkbox" class="drawer-toggle bg-base-200" />
<div class="drawer-content p-10 bg-base-200 rounded">
    <Outlet></Outlet>
</div>
<div class="drawer-side bg-base-100 rounded p-6">
    <label for="dashboard-sidebar" class="drawer-overlay"></label>
    <ul style={{fontFamily:"poppins", letterSpacing:"1px"}} class="menu p-4 overflow-y-auto w-48 gap-5 text-white text-base-content">
        <li><Link to="/dashboard">
            <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            Orders</Link></li>
        <li><Link to="/dashboard/servicelist">
            <FontAwesomeIcon icon={faListDots}></FontAwesomeIcon>
            Service List</Link></li>
        <li><Link to="/dashboard/review">
            <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
            Review</Link></li>
    </ul>
</div>
</div>
            </div>
        </div>
    );
};

export default Dashboard;