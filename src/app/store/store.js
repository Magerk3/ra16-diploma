import { configureStore } from "@reduxjs/toolkit";
import bestsellersReducer from "./bestsellersSlice";
import catalogReducer from "./catalogSlice";
import searchReducer from "./searchBarSlice";
import productPageReducer from "./productPageSlice";
import cartReducer from "./cartSlice";
import orederingReducer from "./orderingSlice";
export const store = configureStore({
    reducer: {
        bestsellers: bestsellersReducer,
        catalog: catalogReducer,
        search: searchReducer,
        productPage: productPageReducer,
        cart: cartReducer,
        ordering: orederingReducer,
    },
});
