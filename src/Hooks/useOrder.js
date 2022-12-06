import { useEffect, useState } from "react";


const useOrder = () =>{

    const [orders, setOrders] = useState([]);
    
    useEffect(()=>{
      fetch("https://creative-agency-server-production.up.railway.app/order")
      .then(res => res.json())
      .then(data => setOrders(data))
    },[])

    return [orders, setOrders];
}

export default useOrder;