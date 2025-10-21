
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WishlistItem {
  id: string | number;
  name?: string;
  price?: number;
  wishlist?: boolean;
}

// Define your state type
interface WishlistState {
  list: WishlistItem[];
  wishlist: boolean;
}

// Initial state with proper typing
const initialState: WishlistState = {
  list: [],
  wishlist: false
};

const wishlistslice = createSlice({
    name: 'wishlist',
    initialState, // Use the typed initialState here
    reducers: {
        togglewishlist: (state, action: PayloadAction<WishlistItem>) => {
            const existingItem = state.list.find(item => item.id === action.payload.id);
            if (!existingItem) {
                state.list.push({ ...action.payload, wishlist: true });
            } else {
                const index = state.list.findIndex(item => item.id === action.payload.id);
                state.list.splice(index, 1);
            }
        }
    }
});

export const { togglewishlist } = wishlistslice.actions;
export default wishlistslice.reducer;