import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: "idle",
    productData: [],
    chosenSize: null,
    quantity: 1,
};

export const loadProductData = createAsyncThunk(
    "productPage/loadProduct",
    async (id) => {
        const response = await fetch(`http://localhost:7070/api/items/${id}`);
        const json = response.json();
        return json;
    }
);

export const productPageSlice = createSlice({
    name: "productPage",
    initialState,
    reducers: {
        selectSize: (state, action) => {
            if (state.productData.sizes[action.payload].selected) {
                state.productData.sizes[action.payload].selected = false;
                state.chosenSize = undefined;
            } else {
                state.productData.sizes[action.payload].selected = true;
                state.chosenSize = state.productData.sizes[action.payload];
            }
        },
        increaseQuantity: (state) => {
            if (state.quantity < 10) state.quantity++;
        },
        decreaseQuantity: (state) => {
            if (state.quantity > 1) state.quantity--;
        },
        emptyState: (state) => {
            state.status = "idle";
            state.productData = [];
            state.chosenSize = null;
            state.quantity = 1;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loadProductData.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(loadProductData.rejected, (state) => {
            state.status = "error";
        });
        builder.addCase(loadProductData.fulfilled, (state, action) => {
            state.status = "loaded";
            state.productData = action.payload;
        });
    },
});

export const { selectSize, increaseQuantity, decreaseQuantity, emptyState } =
    productPageSlice.actions;
export const selectStatus = (state) => state.productPage.status;
export const selectPoductData = (state) => state.productPage.productData;
export const selectChosenSize = (state) => state.productPage.chosenSize;
export const selectQuantity = (state) => state.productPage.quantity;

export default productPageSlice.reducer;
