import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/cartSlice";
const styles = {
  body: `grid place-items-center mb-5`,
  second_div: `grid place-items-center `,
  image: `h-[192px] w-[192px] rounded-lg border-2 border-gray-100 object-cover`,
  name: `text-sm`,
  price: `font-bold text-blue-500`,
  button: `bg-gray-400 text-white rounded-[8px] text-xs px-5 py-3 hover:bg-blue-600`,
  line: ``,
};

const FeaturedItem = ({ name, price, id, image }) => {
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
    <div className={styles.body}>
      <Link to={`/Shop/${id}`}>
        <div className={styles.second_div}>
          <img src={image} alt="" className={styles.image} />
        </div>
        <p className={styles.name}>{name}</p>
        <h3 className={styles.price}>Ksh.{price.toLocaleString()}</h3>
      </Link>
      <button className={styles.button} onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default FeaturedItem;
