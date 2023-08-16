import { AxiosPromise } from "axios";
import Api from "../common/Api";

const checkDiscount = (data: any): AxiosPromise<any> => {
   return Api.post("/api/discount/check-discount", {
     code: data,
   });
};

const CartApi = {
   checkDiscount
}

export default CartApi