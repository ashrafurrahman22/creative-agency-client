import React from "react";
import client1 from '../assets/clients/pt1.png';
import client2 from '../assets/clients/pt2.png';
import client3 from '../assets/clients/pt3.png';
import client4 from '../assets/clients/pt4.png';
import client5 from '../assets/clients/pt5.png';
import client6 from '../assets/clients/pt6.png';
import client7 from '../assets/clients/pt7.png';
import client8 from '../assets/clients/pt8.png';


const OurClients = () => {
  return (
    <div className="px-20 bg-base-300 py-20">
      <div className="grid grid-cols-2 items-center">
        <div>
            <div className="flex items-center gap-3">
                <div style={{height:"2px"}} className=" bg-black w-20"></div>
                <h1 className="text-xl font-semibold">Our Clients</h1>
            </div>
            <h1 className="text-5xl font-bold py-5">We Worked With</h1>
        </div>
        <div className="w-10/12 justify-end">
            <p className="text-justify">Our favorite brands are our friends! We help them to achieve their goals, they help us to stay sharp.</p>
        </div>
      </div>
    <div className="grid grid-cols-4 gap-10 py-12">
        <img className="hover:-translate-y-1 hover:scale-110 hover:card duration-700" src={client1} alt="" />
        <img className="hover:-translate-y-1 hover:scale-110 hover:card duration-700" src={client2} alt="" />
        <img className="hover:-translate-y-1 hover:scale-110 hover:card duration-700" src={client3} alt="" />
        <img className="hover:-translate-y-1 hover:scale-110 hover:card duration-700" src={client4} alt="" />
        <img className="hover:-translate-y-1 hover:scale-110 hover:card duration-700" src={client5} alt="" />
        <img className="hover:-translate-y-1 hover:scale-110 hover:card duration-700" src={client6} alt="" />
        <img className="hover:-translate-y-1 hover:scale-110 hover:card duration-700" src={client7} alt="" />
        <img className="hover:-translate-y-1 hover:scale-110 hover:card duration-700" src={client8} alt="" />

    </div>


    </div>
  );
};

export default OurClients;
