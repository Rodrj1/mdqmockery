import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ItemProps } from "../../types";

interface wishlist {
  currentItems: ItemProps[];
}

const initialState: wishlist = {
  currentItems: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishList(state, action: PayloadAction<ItemProps>) {
      console.log("HERE");
      const findItemInWishlist = state.currentItems.find(
        (item) => item.name === action.payload.name
      );
      if (!findItemInWishlist) state.currentItems.push(action.payload);
    },
  },
});

export const { addToWishList } = wishlistSlice.actions;
export default wishlistSlice.reducer;
