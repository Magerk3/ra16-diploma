import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { error, loaded, loading } from "../../statuses";


const initialState = {
    status: "idle",
    data: [],
};

export const fetchData = createAsyncThunk("bestsellers/fetchData", async () => {
    const response = await fetch("http://localhost:7070/api/top-sales");

    const json = await response.json();

    return json;
});

export const bestsellersSlice = createSlice({
    name: "bestsellers",
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
            state.data = action.payload;
        });
    },
});

export const selectBestsellers = (state) => state.bestsellers.data;
export const selectStatus = (state) => state.bestsellers.status;

export default bestsellersSlice.reducer;
