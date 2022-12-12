import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  value: [],
}
export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct: (state,action) => {
            state.value += action.payload; 
        }
    }
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },

});
export const {addProduct } = productSlice.actions;
export default productSlice.reducer;
