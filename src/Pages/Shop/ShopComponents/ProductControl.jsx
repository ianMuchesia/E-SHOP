import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, removeItemFromCart } from "../../../store/cartSlice";
import { RiSubtractFill } from "react-icons/ri";
import { GrFormAdd } from "react-icons/gr";




const ProductControl = ({SelectedProduct, SelectedCartProduct}) => {





    const {name, imageUrl, category,price, quantity, description,id} = SelectedProduct
     //cart controls
     const dispatch = useDispatch()

     const handleIncrement =()=>{
       dispatch(addToCart({
         name,
         price,
         id,
         imageUrl,
       }))
     }
     const handleDecrement=()=>{
       dispatch(removeFromCart(id))
     }
     const handleRemove=()=>{
       dispatch(removeItemFromCart(id))
     }
     const handleAddToCart = () => {
         dispatch(
           addToCart({
             name,
             id,
             price,
             imageUrl,
           })
         );
       };
     const slicedDescription = description.slice(0,160)
  return (
    <div className="bg-white p-5 mt-15 rounded-3xl h-full grid  gap-4 sm:grid-cols-2">
      <div className="grid place-items-center">
        <img
          src={imageUrl}
          alt=""
          className="h-[192px] w-[192px] rounded-lg border-2 border-gray-100 object-cover sm:h-[250px] sm:w-[250px] lg:h-[350px] lg:w-[350px]"
        />
      </div>
      <div className="grid">
        <h1 className="text-4xl font-bold text-center">{name}</h1>

        <h1 className="text-4xl font-bold m-4 text-green-600 lg:text-center">
          Ksh.{price.toLocaleString()}
        </h1>

        <p className="text-center"> {slicedDescription}...</p>
        <div className="flex items-center justify-between border-solid border-[0.5px] border-gray-400 rounded-lg gap-3  p-1 w-[200px] mx-auto m-4">
          Quantity
          <span onClick={handleIncrement}>
            <GrFormAdd />
          </span>
          <p className="text-gray-500">
            {" "}
            {SelectedCartProduct !== undefined
              ? SelectedCartProduct.quantity
              : 0}
          </p>
          <span onClick={handleDecrement}>
            <RiSubtractFill />
          </span>
        </div>
        <div className="flex flex-col gap-2 items-center m-4">
          <button
            className="bg-gray-400 text-white rounded-[8px] text-xs px-5 py-4 hover:bg-blue-600 w-[250px]"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          <button
            type="button"
            className="font-medium text-indigo-600 hover:text-indigo-500 bg-gray-400 rounded-[8px] py-3 w-[250px]"
            onClick={handleRemove}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductControl;
