import { useEffect, useState } from "react";


const useService = () =>{

    const [services, setServices] = useState([]);
    
    useEffect(()=>{
      fetch("https://creative-agency-server-production.up.railway.app/service")
      .then(res => res.json())
      .then(data => setServices(data))
    },[])

    return [services, setServices];
}

export default useService;