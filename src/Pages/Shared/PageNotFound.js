import React from 'react';

const PageNotFound = () => {
    return (
        <div style={{backgroundColor:"#FBD062"}} className='min-h-screen text-black flex flex-col justify-center items-center'>
            <h1 className='text-8xl font-extrabold'>404 Error!</h1>
            <h3 className='font-bold text-4xl'>Sorry! Page Not Found!</h3>
        </div>
    );
};

export default PageNotFound;