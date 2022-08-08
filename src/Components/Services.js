import React from "react";
import useService from "../Hooks/useServices";
import SingleService from "./SingleService";

const Services = () => {


  const [services] = useService();


  return (
    <div className="lg:px-20 px-10 lg:pt-4">

        <h2 className="text-3xl font-bold text-center my-20">Provide awesome <span style={{color:"#7AB259"}}>services</span> </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8">
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
