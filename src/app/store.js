import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import  bestsellersReducer from '../features/bestsellers/bestsellersSlice'
import catalogReducer from '../features/catalog/catalogSlice';
import searchReducer from '../features/search/searchBarSlice'
import productPageReducer from '../features/productPage/productPageSlice';
import cartReducer from '../features/cart/cartSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    bestsellers: bestsellersReducer,
    catalog: catalogReducer,
    search: searchReducer,
    productPage: productPageReducer,
    cart: cartReducer,
  },
});
