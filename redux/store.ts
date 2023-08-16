import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk';
import common from "./globalSlice";
import cart from "./cartSlice";
import user from './authSlice'
import orderHistory from './orderHistorySlice'
import product from './productSlice'
const store = configureStore({
  reducer: {
   common,
   cart,
   user,
   orderHistory,
   product
  },
  devTools: true,
  middleware: [thunkMiddleware],
});

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
