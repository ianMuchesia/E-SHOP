import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice"
import authReducer from "./authSlice"
import userReducer from "./userSlice"
import uiReducer from "./uiSlice"

const store = configureStore({
    reducer:{
        product:productReducer,
        cart: cartReducer,
        auth: authReducer,
        user: userReducer,
        ui: uiReducer,
        
        //cartItems: cartItemsReducer
    }
})
export default store