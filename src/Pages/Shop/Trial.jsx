import { useEffect, useState } from "react";
import { database } from "../../Config/fireBaseConfig";
import { getDocs, collection } from "firebase/firestore";
const Trial = () => {
  /* const AllProducts = collection(database, "Cart");
  const [cart , setCart] = useState([])

  
   const fetchProducts = async()=>{
    const data = await getDocs(AllProducts);
    const products = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setCart(products)
  }
  useEffect(()=>{
    fetchProducts()
  },[])
  const oneCart = cart.map(item=>item.cartId)
      console.log(oneCart) */
  return (
    <div>

    </div>
  )
}

export default Trial