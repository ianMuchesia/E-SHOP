import { collection, getDocs } from "@firebase/firestore";
import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import Spinner from "../../components/Spinner";
import { database } from "../../Config/fireBaseConfig";

const Shop = () => {
  const [products, setProducts] = useState([]);

  const [loading , setLoading] = useState(false)

  //fetch products from firestore
  const AllProducts = collection(database, "products");

  const getProducts = async () => {
    setLoading(true)
    const data = await getDocs(AllProducts);
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setLoading(false)
  };

  useEffect(() => {
    
    getProducts();
    
  }, []);
  
  //loading spinner
  if(loading) return <Spinner message="loading..."/> 
  
  
  return (
    <div className="p-5 font-sans sm:grid sm:grid-cols-3 gap-4 lg:grid-cols-4 ">
      <Sidebar/>
      <div className="bg-white p-5 mt-15 rounded-3xl sm:col-span-2 lg:col-span-3 ">
      <h2 className="text-2xl text-center sm:m-2 sm:font-bold">Products</h2>
        <div className="grid place-items-center gap-4  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <hr className="w-full border-2 sm:hidden"/>
        {!loading && products.map((product) => {
          return (
            <div key={product.id} className="grid place-items-center mb-5">
              <div className="] grid place-items-center ">
                <img src={product.imageUrl} alt="" className="h-[192px] w-[192px] rounded-lg border-2 border-gray-100 object-cover"/>
              </div>
              <p className="text-sm">{product.name}</p>
              <h3 className="font-bold text-blue-500">Ksh.{product.price.toLocaleString()}</h3>
              <button className="bg-gray-400 text-white rounded-[8px] text-xs px-5 py-3 hover:bg-blue-600">
                Add to Cart
              </button>
              <hr className="w-full border-1 m-1"/>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default Shop;
