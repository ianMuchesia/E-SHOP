import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    itemsList:[],
    totalQuantity:0,
    showCart: false
}
const cartSlice= createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state,action){
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

        },
        setShowCart(state){
            state.showCart = true;

        }
    }

})

export default cartSlice.reducer
export const {addToCart} =  cartSlice.actions