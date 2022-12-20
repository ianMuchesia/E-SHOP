import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "@firebase/firestore";
import { database } from "../Config/fireBaseConfig";
import { useDispatch } from "react-redux";
import { showNotification } from "./uiSlice";


const initialState = {
  loading: false,
  products: [],
  error: "",
  productCategory:[],
  categoryName: ""
};

const AllProducts = collection(database, "products");

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    let products = localStorage.getItem("products");
    if (products) {
      products = await JSON.parse(localStorage.getItem("products"));
    
    } else {
      const data = await getDocs(AllProducts);
      products = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      localStorage.setItem("products", JSON.stringify(products));
    }

    return products;
  }
);
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers:{
    categorizeProducts(state,action){
        const newCategoryName = action.payload
        if(newCategoryName === "All" ){
          state.productCategory = state.products
          state.categoryName = "All Products"
        }else{
          state.productCategory =  state.products.filter(product=>product.category===newCategoryName)
          state.categoryName = newCategoryName
        }
        
    }
},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = "";
      
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = "Something wrong happened,please check your connection";
    });
  },
});
export default productSlice.reducer;
export const {categorizeProducts} = productSlice.actions
