import {ADD_PRODUCT, GET_ALL_PRODUCTS, GET_PRODUCT} from "../types";
import axios from "axios";
// interfaces
import {IDispatchInterface} from "../../interfaces/global";
import {IAddProduct} from "../../interfaces/products";

export const getAllProducts = () => (dispatch: IDispatchInterface) => {
    axios.get('/products/')
        .then((res) => {
            dispatch({
                type: GET_ALL_PRODUCTS,
                payload: res.data
            });
        })
        .catch((err) => {
            console.log(err);
        })
}

export const getCategoryProducts = (categoryId: string) => (dispatch: IDispatchInterface) => {
    axios.get(`/products/category/${categoryId}/`)
        .then((res) => {
            dispatch({
                type: GET_ALL_PRODUCTS,
                payload: res.data
            })
        })
        .catch((err) => console.log(err))
}

export const getProduct = (id: string) => (dispatch: IDispatchInterface) => {
    axios.get(`/products/${id}/`)
        .then((res) => {
            dispatch({
                type: GET_PRODUCT,
                payload: res.data
            });
        })
        .catch((err) => {
            console.log(err);
        })
}

export const addProduct = (productData: IAddProduct) => (dispatch: IDispatchInterface) => {
    axios.post('/products/', productData, {
        headers: {
            "Content-type": "multipart/form-data"
        }
    })
        .then((res) => {
            dispatch({
                type: ADD_PRODUCT,
                payload: res.data
            });
        })
        .catch((err) => {
            console.log(err);
        })

}