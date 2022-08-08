import React from 'react';
import customer1 from '../assets/images/customer-1.png'
import customer2 from '../assets/images/customer-2.png'
import customer3 from '../assets/images/customer-3.png'


const Feedback = () => {
    return (
        <div style={{fontFamily:"poppins", letterSpacing:"2px"}} className="lg:px-20 px-10">
            <h2 className='text-3xl text-center font-bold my-12'>Clients <span style={{color:"#7AB259"}}>Feedback</span></h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8'>

                <div className='card card-body bg-base-100 shadow-2xl'>
                    <div className="flex gap-8 my-3 items-center">   
                    <div>
                        <img className='w-20' src={customer1} alt="" />
                    </div>
                    <div className='text-center'>
                        <h1 className='lg:text-2xl font-bold'>Nash Patrik</h1>
                        <h3 className='lg:text-xl'>CEO, Manpol</h3>
                    </div>
                    </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, tenetur molestiae expedita quae commodi praesentium doloribus obcaecati consequuntur dolores cumque.</p>
                </div>
                <div className='card card-body bg-base-100 shadow-2xl'>
                    <div className="flex gap-8 my-3 items-center">   
                    <div>
                        <img className='w-20' src={customer2} alt="" />
                    </div>
                    <div className='text-center'>
                        <h1 className='lg:text-2xl font-bold'>Bria Malone</h1>
                        <h3 className='lg:text-xl'>CEO, Manpol</h3>
                    </div>
                    </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, tenetur molestiae expedita quae commodi praesentium doloribus obcaecati consequuntur dolores cumque.</p>
                </div>
                <div className='card card-body bg-base-100 shadow-2xl'>
                    <div className="flex gap-8 my-3 items-center">   
                    <div>
                        <img className='w-20' src={customer3} alt="" />
                    </div>
                    <div className='text-center'>
                        <h1 className='lg:text-2xl font-bold'>Miriam Balone</h1>
                        <h3 className='lg:text-xl'>CEO, Manpol</h3>
                    </div>
                    </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, tenetur molestiae expedita quae commodi praesentium doloribus obcaecati consequuntur dolores cumque.</p>
                </div>
            </div>

        </div>
    );
};

export default Feedback;