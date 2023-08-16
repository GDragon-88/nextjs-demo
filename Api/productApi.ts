import { AxiosPromise } from "axios";
import Api from "../common/Api";

const getListProduct = (params: any): AxiosPromise<any> => {
   return Api.get("/api/product/get-all", {
     params:params,
   });
};

const ProductApi = {
   getListProduct
}

export default ProductApi