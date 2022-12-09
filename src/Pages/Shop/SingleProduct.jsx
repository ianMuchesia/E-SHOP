import React from "react";
import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";

import Description from "./ShopComponents/Description";
import Review from "./ShopComponents/Review";
import ProductControl from "./ShopComponents/ProductControl";
import OtherProducts from "./ShopComponents/OtherProducts";
const styles = {
  descriptionDiv: `bg-white  mt-4 rounded-3xl h-full`,
  headerDiv: `bg-[#20242e] rounded-t-3xl p-5`,
  descriptionHeader: `text-gray-200`,
  reviewsHeader: `text-gray-200`,
};

const SingleProduct = ({ product }) => {

  //product id of the selected product
  const { productID } = useParams();
  const SelectedProduct = product.products.find(
    (item) => item.id === productID
  );

  //to look if it belongs to the cart Items
  const cartItems = useSelector((state) => state.cart.itemsList);
  const SelectedCartProduct = cartItems.find((item) => item.id === productID);


  return (
    <div className="p-5">
      <ProductControl
        SelectedProduct={SelectedProduct}
        SelectedCartProduct={SelectedCartProduct}
      />
      <div className={styles.descriptionDiv}>
        <div className={styles.headerDiv}>
            
          <h3 className={styles.descriptionHeader}>Description</h3>
          <h3 className={styles.reviewsHeader}>
            Reviews <span className="text-red-200">0</span>
          </h3>
        </div>
        <div className="grid sm:grid-cols-2">
        <Description description={SelectedProduct.description} />
        <Review />
        </div>
      </div>
      <div className={styles.descriptionDiv}>
        <OtherProducts SelectedProduct={SelectedProduct} product={product}/>
      </div>

    </div>
  );
};

export default SingleProduct;
