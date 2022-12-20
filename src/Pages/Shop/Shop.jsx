import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Spinner from "../../components/Spinner";

import ShopProduct from "./ShopComponents/ShopProduct";

const Shop = ({product}) => {
  let productsToBeDisplayed;
  if(product.productCategory.length>0){
    console.log("yess")
    productsToBeDisplayed = product.productCategory

  }else{
    
    productsToBeDisplayed = product.products
  }
  return (
    <div className="p-5 font-sans sm:grid sm:grid-cols-3 gap-4 lg:grid-cols-4 ">
      <Sidebar />
      <div className="bg-white p-5 mt-15 rounded-3xl sm:col-span-2 lg:col-span-3 ">
        <h2 className="text-2xl text-center sm:m-2 sm:font-bold">{product.productCategory.length> 0 ? product.categoryName: "Products"}</h2>
        <div className="grid place-items-center gap-4  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <hr className="w-full border-2 sm:hidden" />
          
          {!product.loading &&
            productsToBeDisplayed.map((item) => {
              return (
                <ShopProduct
                  key={item.id}
                  id={item.id}
                  image={item.imageUrl}
                  name={item.name}
                  price={item.price}
                />
              );
            })}
            
        </div>
      </div>
    </div>
  );
};

export default Shop;
