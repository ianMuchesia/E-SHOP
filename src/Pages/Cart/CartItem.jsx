import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RiSubtractFill } from "react-icons/ri";
import { GrFormAdd } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart, removeItemFromCart } from "../../store/cartSlice";

const styles = {
  name: `font-semibold text-sm`,
  otherName: `text-sm text-gray-600`,
  price: `text-gray-400`,
  cartControlsDiv: `flex items-center justify-between border-dashed border-[0.5px] border-gray-400 m-1 p-1 `,
  cartControlsQuantityDiv: `flex items-center justify-between border-solid border-[0.5px] border-gray-400 rounded-lg gap-3  p-1`,
};

const CartItem = ({ image, name, quantity, totalPrice,id ,price}) => {
  

    const dispatch = useDispatch()

    const handleIncrement =()=>{
      dispatch(addToCart({
        name,
        totalPrice,
        price,
        id,
        image,
      }))
    }
    const handleDecrement=()=>{
      dispatch(removeFromCart(id))
    }
    const handleRemove=()=>{
      dispatch(removeItemFromCart(id))
    }
    


  return (
    <li className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={image}
          alt={""}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>{name}</h3>
            <p className="ml-4">Ksh. {totalPrice.toLocaleString()}</p>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className={styles.cartControlsQuantityDiv}>
            Quantity
            <span onClick={handleIncrement}><GrFormAdd /></span>
            <p className="text-gray-500"> {quantity}</p>
            <span onClick={handleDecrement}><RiSubtractFill /></span>
          </div>

          <div className="flex">
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
              onClick={handleRemove}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
