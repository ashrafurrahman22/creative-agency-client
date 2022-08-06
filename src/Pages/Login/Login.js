import React from 'react';
import  Navbar from '../Shared/Navbar';
import LoginForm from './LoginForm';

const Login = () => {
    return (
        <div style={{backgroundColor:"#FBD062"}}>
            <Navbar></Navbar>
            <LoginForm></LoginForm>
        </div>
    );
};

export default Login;