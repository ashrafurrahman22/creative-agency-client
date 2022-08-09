import React from 'react';
import img1 from '../../assets/team/team2.jpg';
import img2 from '../../assets/team/team1.jpg';
import img3 from '../../assets/team/team3.jpg';

const Team = () => {
    return (
        <div className="pt-5 pb-20">
            <div className='py-12  bg-base-300 rounded-xl mx-20'>
            <div className='flex justify-center items-center'>
                <div className='text-center w-2/4'>
                <h2 className='text-5xl font-semibold'>Meet The Team</h2>
                <p className='text-2xl py-5'>As a digital designer, a well-organized portfolio showing off your design skills, range, and interests will be a backbone in your search for clients.</p>
                </div>
                </div>

                <div className='px-20 pt-10 grid grid-cols-3 gap-10'>

                    <div className='flex flex-col items-center'>
                    <div className='border  border-black'>
                        <img className='p-6 mb-[-80px]' src={img1} alt="" />
                    </div>
                        <div className='pt-20 text-center'>
                            <h2 className='text-3xl font-semibold'>Jhon Doe</h2>
                            <p className='text-xl'>Full Stack Developer</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                    <div className='border border-black'>
                        <img className='p-6 mb-[-80px]' src={img2} alt="" />
                    </div>
                        <div className='pt-20 pb-5 text-center'>
                            <h2 className='text-3xl font-semibold'>Diana Doe</h2>
                            <p className='text-xl'>UI/UX Designer</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                    <div className='border border-black'>
                        <img className='p-6 mb-[-80px]' src={img3} alt="" />
                    </div>
                        <div className='pt-20 text-center'>
                            <h2 className='text-3xl font-semibold'>Sarah Doe</h2>
                            <p className='text-xl'>QA Specialist</p>
                        </div>
                    </div>

                </div>
        </div>
        </div>
    );
};

export default Team;