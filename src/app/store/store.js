import { configureStore } from "@reduxjs/toolkit";
import bestsellersReducer from "./bestsellersSlice";
import catalogReducer from "./catalogSlice";
import searchReducer from "./searchBarSlice";
import productPageReducer from "../../components/productPage/productPageSlice";
import cartReducer from "./cartSlice";
export const store = configureStore({
    reducer: {
        bestsellers: bestsellersReducer,
        catalog: catalogReducer,
        search: searchReducer,
        productPage: productPageReducer,
        cart: cartReducer,
    },
});
