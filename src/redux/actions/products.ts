import {ADD_PRODUCT, GET_ALL_PRODUCTS} from "../types";
import axios from "axios";
import {IDispatchInterface} from "../../interfaces/global";
import {IProduct} from "../../interfaces/products";


export const getAllProducts = () => (dispatch: IDispatchInterface) => {
    axios.get('/products/')
        .then((res) => {
            dispatch({
                type: GET_ALL_PRODUCTS,
                payload: res.data
            })
        })
        .catch((err) => {
            console.log(err)
        })
}