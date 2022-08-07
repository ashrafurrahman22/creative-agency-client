import React, { useEffect, useState } from "react";
import SingleService from "./SingleService";

const Services = () => {


  const [services, setServices] = useState([]);
  useEffect(()=>{
    fetch("data.json")
    .then(res => res.json())
    .then(data => setServices(data))
  },[])


  return (
    <div className="px-20 pt-4">

        <h2 className="text-3xl font-bold text-center my-20">Provide awesome <span style={{color:"#7AB259"}}>services</span> </h2>
      <div className="grid grid-cols-3 gap-8">
        {
          services.map(service => <SingleService
          service = {service}
          ></SingleService> )
        }
      </div>
    </div>
  );
};

export default Services;
