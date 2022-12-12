import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  products: [
    {id:1,name:'apple',price: 12},
    {id:2,name:'orange',price: 33},
    {id:3,name:'banana',price: 26},
    {id:4,name:'lemon',price: 12}
  ],
}
export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products = [ action.payload, ...state.products ];
        },
        setProduct: (state, action) => {
            console.log(action.payload);
            state.products = action.payload;
        }
    }
});
export const { addProduct, setProduct } = productSlice.actions;
export default productSlice.reducer;
