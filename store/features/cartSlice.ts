'use client'
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        isCartOpen : false
    },
    reducers:{
       toggleCart : (state, action)=>{
        state.isCartOpen = action.payload
       }
    }
    
})
export const { toggleCart } = cartSlice.actions
export default cartSlice.reducer