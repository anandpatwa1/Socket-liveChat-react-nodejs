import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authUser/authSlice'

export const store = configureStore({
  reducer: {
    auth : authReducer
  },
});