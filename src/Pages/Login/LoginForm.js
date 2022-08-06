import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import google from '../../assets/Social icon/google.png';
import Loading from '../Shared/Loading';

const LoginForm = () => {

    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);


    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if(user1){
        navigate(from, { replace: true });
        console.log(user1);
      }

    if (loading1) {
        return <Loading></Loading>
    }





    return (
        <div className='min-h-screen'>
               <div className="flex justify-center items-center">

               <div style={{width:"570px", height:"457px"}} className="flex rounded-xl bg-base-200 flex-col justify-center items-center p-20">
                <div style={{width:"456px", height:"148px"}}
                className="flex flex-col justify-center items-center"
                >
                    
                <h2 style={{fontFamily:"Montserrat", fontSize:"24px", letterSpacing:"1px"}} className="text-center font-semibold py-3">Login with</h2>
                
                <button style={{width:"400px", height:"51px"}}
                    onClick={() => signInWithGoogle()}
                    className="btn rounded-full  btn-outline"
                >
                    <img className='w-6 mr-3' src={google} alt="" />
                    Continue with Google</button>
                    <p className='text-center py-2'><small>Don't have an account ? <Link className='text-primary' to="/signup">Create New Account</Link></small></p>
                </div>
                </div>
               </div>
        </div>
    );
};

export default LoginForm;