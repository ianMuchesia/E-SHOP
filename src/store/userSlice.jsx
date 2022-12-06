import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: false,
    userName:null,
    userImage:null,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        present(state, action){
            const image = action.payload;
            const name = action.payload;
           state.user = true;
           state.userName = name;
           state.userImage = image;
        },
        absent(state,action){
            state.user = false;
            state.userName=null;
            state.userImage=null;
        }
    }
})

export default userSlice.reducer
export const {present, absent} =  userSlice.actions