import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cartItems.push(action.payload);

        },
        removeFromCart: (state, action) => {
            state.cartItems.filter()
        }
    }
})

export const  {addToCart, removeFromCart} = cartSlice.actions;
export const selectCartItems = (state) => state.cart.cartItems;
export const selectNumberOfOreders = (state) =>  state.cart.cartItems.length;

export default cartSlice.reducer;