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
      const findItemInWishlist = state.currentItems.find(
        (item) => item.name === action.payload.name
      );
      if (!findItemInWishlist) state.currentItems.push(action.payload);
    },
    removeFromWishList(state, action: PayloadAction<ItemProps>) {
      const findItemInWishlist = state.currentItems.find(
        (item) => item.name === action.payload.name
      );
      if (findItemInWishlist)
        state.currentItems.splice(
          state.currentItems.indexOf(findItemInWishlist),
          1
        );
    },
  },
});

export const { addToWishList, removeFromWishList } = wishlistSlice.actions;
export default wishlistSlice.reducer;
