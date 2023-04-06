import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { error, idle, loaded, loading } from "../../statuses";

const initialState = {
    status: idle,
    data: [],
    categoriesStatus: idle,
    categories: [],
    loadMoreStatus: idle,
    showLoadButton: false,
};

export const fetchData = createAsyncThunk(
    "catalog/fetchData",
    async (categoryId) => {
        let response = await fetch(
            `http://localhost:7070/api/items?categoryId=${
                categoryId ? categoryId : ""
            }`
        );
        const json = await response.json();
        return json;
    }
);

export const fetchMore = createAsyncThunk(
    "catalog/fetchMore",
    async (categoryId) => {
        let response = await fetch(
            `https://shoesmaketserver-gsk3.onrender.com/api/items?categoryId=${
                categoryId ? categoryId : ""
            }&offset=6`
        );
        const json = await response.json();
        return json;
    }
);

export const fetchCategories = createAsyncThunk(
    "catalog/fetchCategories",
    async () => {
        const response = await fetch("https://shoesmaketserver-gsk3.onrender.com/api/categories");
        const json = await response.json();
        return json;
    }
);

export const search = createAsyncThunk(
    "catalog/search",
    async (searchString) => {
        const response = await fetch(
            `https://shoesmaketserver-gsk3.onrender.com/api/items?q=${searchString}`
        );
        const json = await response.json();
        return json;
    }
);

const catalogSlice = createSlice({
    name: "catalog",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.status = loading;
        });
        builder.addCase(fetchData.rejected, (state) => {
            state.status = error;
        });
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.status = loaded;
            state.showLoadButton = true;
            state.data = action.payload;
        });
        builder.addCase(fetchCategories.pending, (state) => {
            state.categoriesStatus = loading;
        });
        builder.addCase(fetchCategories.rejected, (state) => {
            state.categoriesStatus = error;
        });
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.categoriesStatus = loaded;
            state.categories = action.payload;
        });
        builder.addCase(fetchMore.pending, (state) => {
            state.loadMoreStatus = loading;
        });
        builder.addCase(fetchMore.rejected, (state) => {
            state.loadMoreStatus = error;
        });
        builder.addCase(fetchMore.fulfilled, (state, action) => {
            state.loadMoreStatus = loaded;
            if (action.payload.length < 6 && state.loadMoreStatus === loaded)
                state.showLoadButton = false;
            state.data = state.data.concat(action.payload);
        });
        builder.addCase(search.pending, (state) => {
            state.status = loading;
        });
        builder.addCase(search.rejected, (state) => {
            state.status = error;
        });
        builder.addCase(search.fulfilled, (state, action) => {
            state.status = loaded;
            state.data = action.payload;
        });
    },
});

export const selectStatus = (state) => state.catalog.status;
export const selectData = (state) => state.catalog.data;
export const selectCategories = (state) => state.catalog.categories;
export const selectShowLoadButton = (state) => state.catalog.showLoadButton;
export const selectLoadMoreStatus = (state) => state.catalog.loadMoreStatus;
export const selectCategoriesStatus = (state) => state.catalog.categoriesStatus;

export default catalogSlice.reducer;
