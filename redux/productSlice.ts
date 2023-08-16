import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import ProductApi from "../Api/productApi"
import { setError, setLoading } from "./globalSlice"
import axios from "axios";

const initState = {
   listProduct:[],
   sort:{
      orderByName:'',
      orderByPrice: '',
      orderByQuantity: '',
      range: {
         min:0,
         max: 100000000,
      },
      paginate: {
         pageNum: 0,
         pageSize: 10,
         total: 0
      }
   }
}

export const getListProduct = createAsyncThunk(
  "product/getList",
  async (params: any, thunkApi) => {
    try {
      thunkApi.dispatch(setLoading(true));
      const res = await ProductApi.getListProduct(params);
      thunkApi.dispatch(setLoading(false));
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
         await thunkApi.dispatch(
           setError(error?.response?.data.message || error.message)
         );
         return thunkApi.rejectWithValue({
           success: false,
           error: error?.response?.data.message || error.message,
         });
       } else if (error instanceof Error) {
         await thunkApi.dispatch(setError(error.message));
       }
       return thunkApi.rejectWithValue({});
    }
  }
);

const productSlice = createSlice({
   initialState: initState,
   name: 'product',
   reducers:{
      resetProductList : (state, action) =>{
         state = initState
      }
   }
})

export const {} =  productSlice.actions;
export const selectProductState = (state: any) => state.product;

export default productSlice.reducer;