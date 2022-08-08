import React from 'react';
import port1 from '../assets/portfolios/landing2-img2-1.png'
import port2 from '../assets/portfolios/landing2-img3-1.png'
import port3 from '../assets/portfolios/landing2-img4-1.png'


const Portfolio = () => {
    return (
        <div className='flex max-w-fit px-20 py-10'>

            <div style={{fontFamily:"poppins"}} className="w-2/3 px-8">
                <h2 style={{lineHeight:"60px"}} className='text-5xl font-bold'>
                Dazzling Collection of <br /> Portfolio Layouts
                </h2>
                <br />
                <p className='text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto minima atque aliquam error sunt reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, recusandae?</p>
                <button className='btn my-6 font-medium text-white px-6 uppercase"
'>View More</button>
            </div>

            <div className='flex flex-col'>

                <div className='flex items-center'>

                <img className='w-80 h-80' src={port1} alt="" />
                <img className='w-2/4' src={port3} alt="" />
                </div>
                <div className='flex justify-center items-center'>
                    <img className='w-2/3 lg:mt-[-300px]' src={port2} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Portfolio;