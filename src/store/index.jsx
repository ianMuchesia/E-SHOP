import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice"
import authReducer from "./authSlice"
import userReducer from "./userSlice"
const store = configureStore({
    reducer:{
        product:productReducer,
        cart: cartReducer,
        auth: authReducer,
        user: userReducer,

    }
})
export default store