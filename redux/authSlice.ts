import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setError, setLoading } from "./globalSlice";
import AuthApi from "../Api/authenApi";
import axios from "axios";

const initialState = {
  userInfo: null,
  userId: typeof window !== 'undefined' ? localStorage.getItem('userId') : "",
  token: typeof window !== 'undefined' ? localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : "" : "",
  registNewUser: null
};

export const userLogin = createAsyncThunk(
  "user/login",
  async (data: any, thunkApi) => {
    try {
      const respone = await AuthApi.login(data);
      return respone.data;
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

export const getMe = createAsyncThunk(
  "user/getMe",
  async (token: string, thunkApi) => {
    try {
      const dataRes = await AuthApi.getMe(token);
      return dataRes.data;
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

export const userSignUp = createAsyncThunk(
  'user/signup',
  async (data: any, thunkApi) => {
    try {
      thunkApi.dispatch(setLoading(true))
      const respone = await AuthApi.signUp(data)
      thunkApi.dispatch(setLoading(false))
      return respone.data
    } catch (error) {
      thunkApi.dispatch(setLoading(false))
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
)

export const changePassword = createAsyncThunk(
  'user/change-password',
  async(data: any, thunkApi) => {
    try {
      thunkApi.dispatch(setLoading(true))
      const response = await AuthApi.changePassword(data)
      thunkApi.dispatch(setLoading(true))
      return response
    } catch (error) {
      thunkApi.dispatch(setLoading(false))
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
)

const authSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    userLogout: (state, action) => {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      state.token = "",
      state.userInfo = null,
      state.userId = ""
    },
    saveUserInfor: (state, action)=>{
      state.registNewUser = action.payload
    },
    resetRegistUser: (state, action)=>{
      state.registNewUser = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.fulfilled, (state, action) => {
        state.token = `Bearer ${action.payload.token}`
        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("userId", action.payload.userId);
      })
      .addCase(getMe.fulfilled, (state, action) => {
        state.userInfo = action.payload
      })
      .addCase(userSignUp.fulfilled, (state, action)=>{

      })
  },
});

export const { userLogout, saveUserInfor, resetRegistUser } = authSlice.actions;
export const selectAuthState = (state: any) => state.user;

export default authSlice.reducer;
