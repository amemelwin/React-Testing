import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './reducer/counterSlice';
import productSlice from './reducer/productSlice';
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    prouct: productSlice
  },
});