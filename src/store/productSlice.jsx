import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { collection, getDocs } from "@firebase/firestore";
import { database } from '../Config/fireBaseConfig';

const initialState = {
    loading:false,
    products: [],
    error:''
}



const AllProducts = collection(database, "products");



  export const fetchProducts = createAsyncThunk('products/fetchProducts',async()=>{
    const data = await getDocs(AllProducts);
    const products = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return products;
  })
  const productSlice = createSlice({
    name:'product',
    initialState,
    extraReducers: builder=>{
        builder.addCase(fetchProducts.pending, state=>{
            state.loading = true 
        })
        builder.addCase(fetchProducts.fulfilled, (state,action)=>{
            state.loading = false
            state.products = action.payload
            state.error = ''
        })
        builder.addCase(fetchProducts.rejected, (state, action)=>{
            state.loading = false
            state.products = []
            state.error = "Something wrong happened,please check your connection"
        })
    }
})
export default productSlice.reducer