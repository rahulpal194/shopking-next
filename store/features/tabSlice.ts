import { createSlice } from "@reduxjs/toolkit";

const tabSlice = createSlice({
    name:'tab',
    initialState:{
        active : ''
    },
    reducers:{
        activetab : (state, action)=>{
            state.active = action.payload
        }
    }
})

export const { activetab } = tabSlice.actions
export default tabSlice.reducer