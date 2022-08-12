import { useEffect, useState } from "react";


const useOrder = () =>{

    const [orders, setOrders] = useState([]);
    
    useEffect(()=>{
      fetch("https://sheltered-headland-87932.herokuapp.com/order")
      .then(res => res.json())
      .then(data => setOrders(data))
    },[])

    return [orders, setOrders];
}

export default useOrder;