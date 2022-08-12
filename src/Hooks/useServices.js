import { useEffect, useState } from "react";


const useService = () =>{

    const [services, setServices] = useState([]);
    
    useEffect(()=>{
      fetch("https://sheltered-headland-87932.herokuapp.com/service")
      .then(res => res.json())
      .then(data => setServices(data))
    },[])

    return [services, setServices];
}

export default useService;