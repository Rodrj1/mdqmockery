import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { items as ITEMS_IN_STOCK } from "../../data/itemsData";
import { ItemProps } from "../../types";

interface stockState {
  currentItems: ItemProps[];
  toPay: number;
}

const initialState: stockState = {
  currentItems: ITEMS_IN_STOCK,
  toPay: 0,
};

const stockSlice = createSlice({
  name: "currentItems",
  initialState,
  reducers: {
    restoreStock(
      state,
      action: PayloadAction<{ name: string; amount: number; price: number }>
    ) {
      const findItemInStock = state.currentItems.findIndex(
        (item) => item.name === action.payload.name
      );
      state.currentItems[findItemInStock].stock += action.payload.amount;
      state.toPay -= action.payload.price * action.payload.amount;
    },
    removeStock(
      state,
      action: PayloadAction<{ name: string; amount: number; price: number }>
    ) {
      const findItemInStock = state.currentItems.findIndex(
        (item) => item.name === action.payload.name
      );
      state.currentItems[findItemInStock].stock -= action.payload.amount;
      state.toPay += action.payload.price * action.payload.amount;
    },
  },
});

export const { restoreStock, removeStock } = stockSlice.actions;
export default stockSlice.reducer;
