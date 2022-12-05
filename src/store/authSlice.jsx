
import { createSlice } from '@reduxjs/toolkit';
 
const initialState = {
  isAuthenticated: false,
  isAuthenticating: false,
  userID:""
};

/* export const loginEmailAndPassword=(email,password)=>{
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        toast.success("Login successful");
        dispatch(login)
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
} */
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
        state.isAuthenticated = false;
      state.isAuthenticating = true;
    },
    loginSuccess: (state, action) => {
        const id = action.payload
        state.userID = id
      state.isAuthenticated = true;
      state.isAuthenticating = false;
    },
    logout: (state) => {
     
      state.isAuthenticated = false;
      state.isAuthenticating = false;
    },
  },
});

export const { login, loginSuccess,  logout } = authSlice.actions;

export default authSlice.reducer