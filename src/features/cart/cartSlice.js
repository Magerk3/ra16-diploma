import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: JSON.parse(localStorage.getItem('cartItems')),
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cartItems.push(action.payload);

        },
        removeFromCart: (state, action) => {
           state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
        }
    }
})

export const  {addToCart, removeFromCart} = cartSlice.actions;
export const selectCartItems = (state) => state.cart.cartItems;
export const selectNumberOfOreders = (state) =>  state.cart.cartItems.length;

export default cartSlice.reducer;