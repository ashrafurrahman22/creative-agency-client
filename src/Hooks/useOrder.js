import { useEffect, useState } from "react";


const useOrder = () =>{

    const [orders, setOrders] = useState([]);
    
    useEffect(()=>{
      fetch("https://cute-tan-scorpion-wrap.cyclic.app/order")
      .then(res => res.json())
      .then(data => setOrders(data))
    },[])

    return [orders, setOrders];
}

export default useOrder;