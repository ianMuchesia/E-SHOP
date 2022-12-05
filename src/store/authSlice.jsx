
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: true,
  error: null,
  isAuthenticating: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      state.isAuthenticating = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      const user = action.payload;
      state.isAuthenticated = true;
      state.user = user;
      state.isAuthenticating = false;
    },
    loginError: (state, action) => {
      const error = action.payload;
      state.error = error;
      state.isAuthenticating = false;
    },
    logout: (state) => {
      firebase.auth().signOut();
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, loginSuccess, loginError, logout } = authSlice.actions;
export default authSlice.reducer