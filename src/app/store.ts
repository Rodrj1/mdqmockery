import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
};
import cartReducer from "../features/ReduxStore/cart-slice";
import stockReducer from "../features/ReduxStore//stock-slice";
import notesReducer from "../features/ReduxStore//notes-slice";
import wishlistReducer from "../features/ReduxStore//wishlist-slice";

const reducers = combineReducers({
  cart: cartReducer,
  itemsInStock: stockReducer,
  currentNotes: notesReducer,
  wishlist: wishlistReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: { reducers: persistedReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export const persistor = persistStore(store);
