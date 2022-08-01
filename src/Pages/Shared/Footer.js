import React from 'react';
import '../../Styles/Footer.css'

const Footer = () => {
    return (
        <div id='footer' style={{fontFamily:"poppins"}} className="p-20 mt-20">

            <div className="grid grid-cols-2 gap-8">
            <div>
            <h2 className='text-4xl my-5 font-bold'>Let us handle your <br /> project, professionally.</h2>
            <p className='text-md'>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
            </div>

            <div className='flex flex-col gap-5'>
                <input className='py-3 px-3 rounded' placeholder=' Your Email Address' type="text" />
                <input className='py-3 px-3 rounded' placeholder='Your Name/Company Name' type="text" />
                <textarea className='px-5 rounded py-3' placeholder='Your Message...' name="" id="" cols="25" rows="10"></textarea>
                <input style={{fontFamily:"poppins", letterSpacing:"3px"}} className='btn w-28' type="submit" value="Send" />
            </div>

            </div>

        </div>
    );
};

export default Footer;