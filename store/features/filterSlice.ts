'use client'
import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name:'filter',
    initialState:{
        isFilterActive : false
    },
    reducers:{
        toggleFilter : (state, action)=>{
            state.isFilterActive = action.payload
        }
    }
})
export const { toggleFilter } = filterSlice.actions
export default filterSlice.reducer