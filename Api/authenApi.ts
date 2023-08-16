import { AxiosPromise } from "axios";
import Api from "../common/Api";

const login = (data: any): AxiosPromise<any> => {
  return Api.post("/api/auth/login", {
    email: data.email,
    password: data.password,
  });
};

const getMe = (token: any): AxiosPromise<any> =>{
  Api.defaults.headers.common["Authorization"] = token;
  return Api.get(`api/auth/me`)
}

const signUp = (data: any): AxiosPromise<any> => {
  return Api.post('/api/auth/signup', data)
}

const changePassword = (data: any): AxiosPromise<any> => {
  return Api.put('/api/auth/change-password', data)
}

const AuthApi = {
  login,
  getMe,
  signUp,
  changePassword
};

export default AuthApi;
