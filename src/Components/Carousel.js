import React from 'react';
import carousel1 from '../assets/images/carousel-1.png';
import carousel2 from '../assets/images/carousel-2.png';
import carousel3 from '../assets/images/carousel-3.png';
import carousel4 from '../assets/images/carousel-4.png';
import carousel5 from '../assets/images/carousel-5.png';
import '../Styles/Carousel.css'

const Carousel = () => {
    return (
        <div style={{backgroundColor:"#111430"}} className='px-20 py-10 my-20'>
            
            <h1 style={{fontFamily:"poppins", letterSpacing:"2px"}} className='text-2xl text-center py-12 text-white font-bold'>Here are some of <span style={{color:"#7AB259"}}>our works</span> </h1>

            <div>
            <div class="carousel w-full">
  <div id="item1" class="carousel-item w-full">
    <img style={{width:"465px", height:"334px"}} src={carousel1} className="mx-auto" />
  </div> 
  <div id="item2" class="carousel-item w-full">
    <img style={{width:"465px", height:"334px"}} src={carousel2} className="mx-auto" />
  </div> 
  <div id="item3" class="carousel-item w-full">
    <img style={{width:"465px", height:"334px"}} src={carousel3} className="mx-auto" />
  </div> 
  <div id="item4" class="carousel-item w-full">
    <img style={{width:"465px", height:"334px"}} src={carousel4} className="mx-auto" />
  </div>
  <div id="item5" class="carousel-item w-full">
    <img style={{width:"465px", height:"334px"}} src={carousel5} className="mx-auto" />
  </div>
</div> 
<div class="flex justify-center w-full pt-8 gap-5">
  <a href="#item1" class="">
  <div style={{backgroundColor:"#7AB259"}} className='h-5 w-5 rounded-full hover:-translate-y-1 hover:scale-110 hover:card duration-700'></div>
      </a> 
  <a href="#item2">
  <div style={{backgroundColor:"#7AB259"}} className='h-5 w-5 rounded-full hover:-translate-y-1 hover:scale-110 hover:card duration-700'></div>
      </a> 
  <a href="#item3"> <div style={{backgroundColor:"#7AB259"}} className='h-5 w-5 rounded-full hover:-translate-y-1 hover:scale-110 hover:card duration-700'></div></a> 
  <a href="#item4"> <div style={{backgroundColor:"#7AB259"}} className='h-5 w-5 rounded-full hover:-translate-y-1 hover:scale-110 hover:card duration-700'></div></a>
  <a href="#item5"> <div style={{backgroundColor:"#7AB259"}} className='h-5 w-5 rounded-full hover:-translate-y-1  hover:scale-110 hover:card duration-700'></div></a>
</div>

            </div>

        </div>
    );
};

export default Carousel;