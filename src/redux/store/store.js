import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';
import { productReducer } from '../features/productSlice';
import { userReducer } from '../features/userSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
    user: userReducer,
  },
})