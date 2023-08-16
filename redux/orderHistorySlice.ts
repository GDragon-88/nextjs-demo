import { createSlice } from "@reduxjs/toolkit"


const initState = {
   hasNewOrder: false,
   newOrderInfo: {},
   orderHistory: []
}

const orderHistorySlice = createSlice({
   initialState: initState,
   name: 'orderHistory',
   reducers:{
      setHasNewOrder : (state, action) => {
         state.hasNewOrder = action.payload
      },
      setNewOrderInfo: (state, action) => {
         state.newOrderInfo = action.payload
      }
   },
   extraReducers(builder) {

   },
})

export const {setHasNewOrder, setNewOrderInfo} =  orderHistorySlice.actions;
export const selectOrderHistoryState = (state: any) => state.orderHistory;

export default orderHistorySlice.reducer;