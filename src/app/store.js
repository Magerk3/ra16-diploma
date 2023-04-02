import { configureStore } from "@reduxjs/toolkit";
import bestsellersReducer from "../features/bestsellers/bestsellersSlice";
import catalogReducer from "../features/catalog/catalogSlice";
import searchReducer from "../features/search/searchBarSlice";
import productPageReducer from "../features/productPage/productPageSlice";
import cartReducer from "../features/cart/cartSlice";
export const store = configureStore({
    reducer: {
        bestsellers: bestsellersReducer,
        catalog: catalogReducer,
        search: searchReducer,
        productPage: productPageReducer,
        cart: cartReducer,
    },
});
