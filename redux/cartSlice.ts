import { createSlice } from "@reduxjs/toolkit";
import { listProduct } from "../constant/data";

const initialStates = {
  cartItem: listProduct,
  numberItem: listProduct.length,
  discountPercent: 0,
  total: listProduct?.reduce((accumulator: any, currentValue: any) =>
  accumulator + currentValue.quantity * currentValue.price , 0)
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialStates,
  reducers: {
    addToCart: (state: any, action) => {
      const index = state.cartItem.findIndex(
        (item: any) => item.id === action.payload.id
      );
      if (index !== -1) {
        if(state.cartItem[index].quantity + action.payload.quantity === 0){
          state.cartItem = state?.cartItem?.filter((item: any) =>item.id !== state.cartItem[index].id)
        } else {
          state.cartItem[index].quantity =
          state.cartItem[index].quantity + action.payload.quantity;
        }
      } else {
        //add item
        state.cartItem = [...state.cartItem, action.payload];
      }

      // calculate total number
      state.numberItem = state.cartItem.reduce((accumulator: any, currentValue: any) =>
      accumulator + currentValue.quantity, 0)

      // calculate total money
      state.total = state.cartItem.reduce((accumulator: any, currentValue: any) =>
      accumulator + currentValue.quantity * currentValue.price , 0)

    },

    removeAll: (state: any, action) =>{
      // remove item
      state.cartItem = state?.cartItem?.filter((item: any) =>item.id !== action.payload)
      // calculate total number
      state.numberItem = state.cartItem.reduce((accumulator: any, currentValue: any) =>
      accumulator + currentValue.quantity, 0)

      // calculate total money
      state.total = state.cartItem.reduce((accumulator: any, currentValue: any) =>
      accumulator + currentValue.quantity * currentValue.price , 0)
    },
    addDiscount: (state, action) => {
      state.discountPercent = action.payload
    }
  },
});

export const {addToCart, removeAll, addDiscount} = cartSlice.actions;

export const selectCartState = (state: any)=> state.cart;

export default cartSlice.reducer;
