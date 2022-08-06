import React from 'react';
import Navbar from '../Shared/Navbar';
import Signup from './Signup';

const SignUpMain = () => {
    return (
        <div  style={{backgroundColor:"#FBD062"}}>
            <Navbar></Navbar>
            <Signup></Signup>
        </div>
    );
};

export default SignUpMain;