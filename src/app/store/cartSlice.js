import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { completed, error, idle, server, ordering} from "../../statuses";

const initialState = {
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
    orderStatus: idle,
};

export const order = createAsyncThunk(
    "cart/order",
    async ({ phone, address, items }) => {
        try {
            const response = await fetch(server + "/api/order", {
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
            const sameItem = state.cartItems.find(
                (item) =>
                    item.id === action.payload.id &&
                    item.chosenSize.size === action.payload.chosenSize.size
            );
            if (sameItem) sameItem.count += action.payload.count;
            else state.cartItems.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== action.payload
            );
        },
        changeOrderStatus: (state, action) => {
            state.orderStatus = action.payload;
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

export const { addToCart, removeFromCart, changeOrderStatus } =
    cartSlice.actions;
export const selectCartItems = (state) => state.cart.cartItems;
export const selectNumberOfOreders = (state) => state.cart.cartItems.length;
export const selectOrderStatus = (state) => state.cart.orderStatus;

export default cartSlice.reducer;
