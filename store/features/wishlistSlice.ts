
import { createSlice } from "@reduxjs/toolkit";

const wishlistslice = createSlice({
    name: 'wishlist',
    initialState:{
        list : [],
        wishlist :false
    },
    reducers:{
        togglewishlist: (state, action)=>{
            const existingItem = state.list.find(item => item.id === action.payload.id);
            if (!existingItem) {
                state.list.push({ ...action.payload, wishlist: true });
            } else {
                const index = state.list.findIndex(item => item.id === action.payload.id);
                state.list.splice(index, 1);
            }
        }
    }
})

export const { togglewishlist} = wishlistslice.actions
export default wishlistslice.reducer