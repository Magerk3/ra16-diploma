import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isChecked: false,
};

const orderingSlice = createSlice({
    name: "ordering",
    initialState,
    reducers: {
        changeCheck: (state) => {
            state.isChecked = !state.isChecked;
        },
    },
});

export const { changeCheck } = orderingSlice.actions;
export const selectIsChecked = (state) => state.ordering.isChecked;

export default orderingSlice.reducer;
