import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';

const Dashboard = () => {
    return (
        <div style={{backgroundColor:"#FBD062"}}>
            
            <div>
                <Navbar></Navbar>
            </div>

            <div class="drawer drawer-mobile px-20">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
            <h2 style={{fontFamily:"inter"}} className='text-5xl text-left ml-3 my-3 font-semibold'>Dashboard</h2>
            <Outlet></Outlet>
        </div>
        <div class="drawer-side">
            <label for="dashboard-sidebar" class="drawer-overlay"></label>
            <ul class="menu p-4 overflow-y-auto w-48 gap-5 text-white text-base-content">
                
                <li><Link to="/dashboard" className='btn text-white'>Orders</Link></li>
                <li><Link to="/dashboard/servicelist" className='btn text-white'>Service List</Link></li>
                <li><Link to="/dashboard/review" className='btn text-white'>Review</Link></li>
            </ul>
        </div>
    </div>
        </div>
    );
};

export default Dashboard;