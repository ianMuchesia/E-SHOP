import { showNotification } from "./uiSlice";
import { collection, getDocs } from "@firebase/firestore";
import { database } from "../Config/fireBaseConfig";
import { setDoc, doc } from "firebase/firestore";
import { replaceData } from "./cartSlice";

const AllCartItems = collection(database, "Cart");

export const fetchCartData = (id) => {
  return async(dispatch) => {
    const fetchHandler = async () => {
      const data = await getDocs(AllCartItems);
      const fetchedItems = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const cartItems = fetchedItems.find(item=>item.id === id)
      const cartData = cartItems.cart
      return cartData
      
    };
    
    try{
        const cartData = await fetchHandler()
        dispatch(replaceData(cartData))


    }catch(error){
        console.log(error.message)
        dispatch(
            showNotification({
              open: true,
              message: "failed to load items",
              type: "error",
            })
          );
    }
  };
};

export const sendCartData = (cart, id) => {
  return async (dispatch) => {
    dispatch(
      showNotification({
        open: true,
        message: "Sending Request",
        type: "warning",
      })
    );
    const sendRequest = async () => {
      await setDoc(doc(database, "Cart", id), {
        cart,
      });
      dispatch(
        showNotification({
          open: true,
          message: "Item added to cart",
          type: "success",
        })
      );
    };
    try {
      await sendRequest();
    } catch (error) {
      dispatch(
        showNotification({
          open: true,
          message: "Sending request failed",
          type: "error",
        })
      );
    }
  };
};
