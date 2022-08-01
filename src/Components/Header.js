import React from 'react';
import illustration from '../assets/images/logos/Frame.png'

const Header = () => {
    return (
        <div>
            <div className="lg:grid grid-cols-2 mx-auto mt-0 p-4 text-left">

<div className="max-w-7xl mt-14 mx-auto px-12">
  <h1
    style={{ fontFamily: "poppins", letterSpacing:"2px" }}
    className=" font-extrabold text-6xl lg:text-0 my-4"
  >
    Let’s Grow Your <br /> Brand To The <br /> Next Level
  </h1>

  <p style={{ fontSize: "18px" }} className="my-3">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
    commodo ipsum duis laoreet maecenas. Feugiat{" "}
  </p>

  <div className="ml-2">
    <button style={{letterSpacing:"3px"}}
      id="btn"
      className="btn font-medium w-36 text-white px-8 py-2 my-10 uppercase"
    >
      Hire Us
    </button>
  </div>
</div>

<div>
<img style={{width:"624.6px", height:"422.8px"}} className="p-8" src={illustration} alt="" />
</div>
</div>
        </div>
    );
};

export default Header;