import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { completed, error, ordering } from "../../statuses";

const initialState = {
    cartItems: JSON.parse(localStorage.getItem("cartItems")),
    orderStatus: "idle",
};

export const order = createAsyncThunk(
    "cart/order",
    async ({ phone, address, items }) => {
        try {
            const response = await fetch("http://localhost:7070/api/order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    owner: {
                        phone: phone,
                        address: address,
                    },
                    items: items.map((item) => ({
                        id: item.id,
                        price: item.price,
                        count: item.count,
                    })),
                }),
            });
            console.log(response);
            if (!response.ok) console.error("Failed to place order");
            else localStorage.setItem("cartItems", []);
        } catch (error) {
            return error;
        }
    }
);

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cartItems.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== action.payload
            );
        },
    },
    extraReducers: (builder) => {
        builder.addCase(order.pending, (state) => {
            state.orderStatus = ordering;
        });
        builder.addCase(order.rejected, (state, action) => {
            state.orderStatus = error;
            console.error("rejected with", action.payload);
        });
        builder.addCase(order.fulfilled, (state) => {
            state.orderStatus = completed;
            state.cartItems = [];
            
        });
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.cartItems;
export const selectNumberOfOreders = (state) => state.cart.cartItems.length;
export const selectOrderStatus = (state) => state.cart.orderStatus;

export default cartSlice.reducer;
