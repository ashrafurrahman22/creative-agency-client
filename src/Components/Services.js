import React from "react";
import web from '../assets/images/icons/service1.png'
import graphics from '../assets/images/icons/service2.png'
import develop from '../assets/images/icons/service3.png'

const Services = () => {
  return (
    <div className="px-20 pt-4">

        <h2 className="text-3xl font-bold text-center my-20">Provide awesome <span style={{color:"#7AB259"}}>services</span> </h2>
      <div className="grid grid-cols-3">


        <div class="card lg:w-96 shadow-sm">
          <figure>
            <img style={{width:"74px", height:"74px"}} className="rounded-full" src={web} alt="Shoes" />
          </figure>
          <div class="card-body text-center">
            <h2 class="text-xl font-bold text-center">Web & Mobile design</h2>
            <p>We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
          </div>
        </div>

        <div class="card lg:w-96 shadow-2xl">
          <figure>
            <img style={{width:"74px", height:"74px"}} className="rounded-full" src={graphics} alt="Shoes" />
          </figure>
          <div class="card-body text-center">
            <h2 class="text-xl font-bold text-center">Web & Mobile design</h2>
            <p>Amazing flyers, social media posts and brand representations that would make your brand stand out.</p>
          </div>
        </div>

        <div class="card lg:w-96 shadow-sm">
          <figure>
            <img style={{width:"74px", height:"74px"}} className="rounded-full" src={develop} alt="Shoes" />
          </figure>
          <div class="card-body text-center">
            <h2 class="text-xl font-bold text-center">Web & Mobile design</h2>
            <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
          </div>
        </div>





      </div>
    </div>
  );
};

export default Services;
