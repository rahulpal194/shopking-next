'use client'
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cartSlice';
import filterReducer from './features/filterSlice';
import tabReducer from './features/tabSlice'
import wishlistReducer from './features/wishlistSlice'
import { authapi } from "./api/authapi";

const store = configureStore({
    reducer:{
        [authapi.reducerPath]: authapi.reducer,
        cart : cartReducer,
        filter : filterReducer,
        tab : tabReducer,
        wishlist : wishlistReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authapi.middleware),
})
export default store;