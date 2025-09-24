'use client'
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cartSlice';
import filterReducer from './features/filterSlice';
import tabReducer from './features/tabSlice'
import wishlistReducer from './features/wishlistSlice'

const store = configureStore({
    reducer:{
        cart : cartReducer,
        filter : filterReducer,
        tab : tabReducer,
        wishlist : wishlistReducer
    }
})
export default store;