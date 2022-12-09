import React from "react";
import { Link } from "react-router-dom";
const styles = {
  body: `grid place-items-center mb-5 `,
  link: `cursor-pointer`,
  second_div: `grid place-items-center `,
  image: `h-[192px] w-[192px] rounded-lg border-2 border-gray-100 object-cover`,
  name: `text-sm`,
  price: `font-bold text-blue-500`,
  button: `bg-gray-400 text-white rounded-[8px] text-xs px-5 py-3 hover:bg-blue-600`,
  line: `w-full border-1 m-1`,
};

const OtherProducts = ({ product, SelectedProduct }) => {



  const otherItems = product.products.filter((item) => {
   return item.id !== SelectedProduct.id;
  });
  console.log(otherItems.slice(0,10))

  return (
    <div>
        <h1 className="text-center text-2xl sm:font-bold md:text-4xl">You may also like...</h1>
    <div className="grid place-items-center gap-4  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-6">
      {otherItems.slice(14,27).map(item=>{
        return(
            <div className={styles.body} key={item.id}>
        <Link to={`/Shop/${item.id}`} className={styles.body}>
          <div className={styles.second_div}>
            <img src={item.imageUrl} alt="" className={styles.image} />
          </div>
          <p className={styles.name}>{item.name}</p>
          <h3 className={styles.price}>Ksh.{item.price.toLocaleString()}</h3>
        </Link>
      
        <hr className={styles.line} />
      </div>
        )
     }) } 
    </div>
    </div>
  );
};

export default OtherProducts;
