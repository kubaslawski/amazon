import {ADD_PRODUCT, ADD_RATE, GET_ALL_PRODUCTS, GET_PRODUCT, SET_ERRORS} from "../types";
import axios from "axios";
// interfaces
import {IDispatchInterface} from "../../interfaces/global";
import {IAddProduct, IRateData} from "../../interfaces/products";

export const getAllProducts = () => async (dispatch: IDispatchInterface) => {
    return await axios.get('/products/')
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

export const getCategoryProducts = (categoryId: string) => async (dispatch: IDispatchInterface) => {
    return await axios.get(`/products/category/${categoryId}/`)
        .then((res) => {
            dispatch({
                type: GET_ALL_PRODUCTS,
                payload: res.data
            })
        })
        .catch((err) => console.log(err))
}

export const getProduct = (id: string) => async (dispatch: IDispatchInterface) => {
    return await axios.get(`/products/${id}/`)
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

export const addProduct = (productData: IAddProduct) => async (dispatch: IDispatchInterface) => {
    return await axios.post('/products/', productData, {
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

export const rateProduct = (rateData: IRateData) => async (dispatch: IDispatchInterface) => {
    return await axios.post(`/products/rate/`, rateData)
        .then((res) => {
            dispatch({
                type: ADD_RATE,
                payload: res.data
            })
        })
        .catch((err) => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data['errors']
            })
        })
}