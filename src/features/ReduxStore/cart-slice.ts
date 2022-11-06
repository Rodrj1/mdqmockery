import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItemProps } from "../../types";

interface cartState {
  items: CartItemProps[];
}

const initialState: cartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItemProps>) {
      if (action.payload.stock > 0) state.items.push(action.payload);
    },

    removeFromCart(state, action: PayloadAction<string>) {
      const findItem = state.items.find((item) => item.id === action.payload);
      if (findItem) {
        state.items.splice(state.items.indexOf(findItem), 1);
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
