import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../../store/cartSlice";
//tailwind styles
const styles = {
  body: `grid place-items-center mb-5 `,
  link:`cursor-pointer`,
  second_div: `grid place-items-center `,
  image: `h-[192px] w-[192px] rounded-lg border-2 border-gray-100 object-cover`,
  name: `text-sm`,
  price: `font-bold text-blue-500`,
  button: `bg-gray-400 text-white rounded-[8px] text-xs px-5 py-3 hover:bg-blue-600`,
  line: `w-full border-1 m-1`,
};

const ShopProduct = ({ id, image, name, price }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        name,
        id,
        price,
        image,
      })
    );
  };
  return (
    <div  className={styles.body} >
      <Link to={`/Shop/${id}`} className={styles.body}>
      <div className={styles.second_div}>
        <img src={image} alt="" className={styles.image} />
      </div>
      <p className={styles.name}>{name}</p>
      <h3 className={styles.price}>Ksh.{price.toLocaleString()}</h3>
      </Link>
      <button className={styles.button} onClick={handleAddToCart}>
        Add to Cart
      </button>
      <hr className={styles.line} />
    </div>
  );
};

export default ShopProduct;
