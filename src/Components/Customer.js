import React from 'react';
import slack from '../assets/images/logos/slack.png';
import airbnb from '../assets/images/logos/airbnb.png';
import uber from '../assets/images/logos/uber.png';
import netflix from '../assets/images/logos/netflix.png';
import google from '../assets/images/logos/google.png';

const Customer = () => {
    return (
        <div className="px-28 my-16">
            <div  className='grid grid-cols-5 items-center gap-10'>
                
            <div>
                <img style={{width:"140px"}} src={slack} alt="" />
            </div>
            <div>
                <img style={{width:"140px"}} src={google} alt="" />
            </div>
            <div>
                <img style={{width:"120px"}} src={uber} alt="" />
            </div>
            <div>
                <img style={{width:"135px"}} src={netflix} alt="" />
            </div>
            <div>
                <img style={{width:"140px"}} src={airbnb} alt="" />
            </div>
            

            </div>


        </div>
    );
};

export default Customer;