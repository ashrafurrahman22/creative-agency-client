import React from 'react';

const SingleService = ({service}) => {

    const {name, img, title} = service;

    return (
        <div class="card shadow-xl hover:bg-base-200 p-5 text-justify hover:-translate-y-1 hover:scale-110 hover:card duration-700 hover:shadow-2xl">
        <figure>
          <img style={{width:"74px", height:"74px"}} className="rounded-full" src={img} alt="Shoes" />
        </figure>
        <div class="card-body text-center">
          <h2 class="text-xl font-bold text-center">{name}</h2>
          <p>{title}</p>
        </div>
      </div>
    );
};

export default SingleService;