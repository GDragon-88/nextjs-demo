import {createSlice} from '@reduxjs/toolkit'

const initialStates = {
   loading: true,
   router:'/',
   windowWidth:null,
   error:"",
   success:""
}

export const commonSlice = createSlice({
   name:'common',
   initialState: initialStates,
   reducers: {
      setLoading: (state, action)=>{
         state.loading= action.payload
      },
      setSuccess: (state, action) => {
         state.success = action.payload
      },
      setRouter: (state, action)=>{
         state.router = action.payload
      },
      setError: (state, action)=>{
         state.error = action.payload
      },
      resizeWindow: (state, action)=>{
         state.windowWidth = action.payload
      }
   }
})

export const {setLoading, setError, setRouter, resizeWindow, setSuccess} = commonSlice.actions;
export const selectCommonState = (state: any)=>state.common;
export default commonSlice.reducer;