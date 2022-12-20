import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    itemsList:[],
    totalQuantity:0,
    showCart: false,
    changed:false,
}

const cartSlice= createSlice({
    name:'cart',
    initialState,
    reducers:{
        replaceData(state, action){
            state.totalQuantity = action.payload.totalQuantity;
            state.itemsList = action.payload.itemsList;

        },
    
        addToCart(state,action){
            state.changed = true;
            const newItem = action.payload
            //to check if the item already exists
            const existingItem = state.itemsList.find(item=>item.id === newItem.id)
            if(existingItem){
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price
                //if it doesn't exist
            }else{
                state.itemsList.push({
                    id:newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name,
                    image: newItem.image
                })
                //when we push the items to array the quantity need to be increased
                state.totalQuantity++
            }

        },
        removeFromCart(state, action){
            state.changed = true;
            const id = action.payload
            const existingItem = state.itemsList.find(item=>item.id === id)
            if(existingItem.quantity===1){
                state.itemsList = state.itemsList.filter(item=>item.id !== id)
                state.totalQuantity--
            }else{
                existingItem.quantity--
            }

        },
        removeItemFromCart(state,action){
            state.changed = true;
            const id = action.payload
            state.itemsList = state.itemsList.filter(item=>item.id!==id)
            

        },
        setShowCart(state){
            state.showCart = true;

        }
    }

})



export default cartSlice.reducer
export const {addToCart,removeFromCart,removeItemFromCart, replaceData} =  cartSlice.actions