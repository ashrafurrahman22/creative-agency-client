import React from 'react';
import carousel1 from '../assets/images/carousel-1.png';
import carousel2 from '../assets/images/carousel-2.png';
import carousel3 from '../assets/images/carousel-3.png';
import carousel4 from '../assets/images/carousel-4.png';
import carousel5 from '../assets/images/carousel-5.png';

const Carousel = () => {
    return (
        <div style={{backgroundColor:"#111430"}} className='px-20 py-20 my-20'>
            
            <h1 style={{fontFamily:"poppins", letterSpacing:"2px"}} className='text-2xl text-center py-12 text-white font-bold'>Here are some of <span style={{color:"#7AB259"}}>our works</span> </h1>

            <div className="grid grid-cols-3 gap-10">


        <div>
            <img style={{width:"465px", height:"334px"}} src={carousel1} alt="" />
        </div>
        <div>
            <img style={{width:"465px", height:"334px"}} src={carousel2} alt="" />
        </div>
        <div>
            <img style={{width:"465px", height:"334px"}} src={carousel3} alt="" />
        </div>
           
            </div>


            <div className='flex justify-center items-center mt-10 gap-5'>
            <div style={{backgroundColor:"#7AB259"}} className='h-4 w-4 rounded-full'></div>
            <div style={{backgroundColor:"#7AB259"}} className='h-3 w-3 rounded-full'></div>
            <div style={{backgroundColor:"#7AB259"}} className='h-3 w-3 rounded-full'></div>
            </div>

        </div>
    );
};

export default Carousel;