import {
    SET_USER,
    LOADING_UI,
    SET_ERRORS,
    CLEAR_ERRORS,
    LOADING_USER,
    SET_UNAUTHENTICATED,
    SET_BASKET,
    SET_PURCHASED_PRODUCTS
} from "../types";
// external libraries
import axios from 'axios';
// interfaces
import {IDispatchInterface} from "../../interfaces/global";
import {IAuth} from "../../interfaces/users";

export interface IBasketItem {
    product: number;
    quantity: number;
}

export const loginUser = (userData: IAuth, navigate:any) => async (dispatch: IDispatchInterface) => {
    dispatch({type: LOADING_UI});
    return await axios.post('/token/', userData)
        .then((res) => {
            setAuthorizationToken(res.data.access);
            dispatch({type: CLEAR_ERRORS});
            navigate('/products');
        })
        .catch((err) =>
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
        )
}

export const logoutUser = () => (dispatch: IDispatchInterface) => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    dispatch({type: SET_UNAUTHENTICATED})
}

const setAuthorizationToken = (token:string) => {
    const bearerToken = `Bearer ${token}`
    localStorage.setItem('token', bearerToken);
    axios.defaults.headers.common['Authorization'] = bearerToken;
}

export const getUserBasket = () => async (dispatch: IDispatchInterface) => {
    return await axios.get('/basket/')
        .then((res) => {
            dispatch({
                type: SET_BASKET,
                payload: res.data
            })
        })
        .catch((err) => console.log(err));
}

export const editBasket = (basketItem: IBasketItem) => async (dispatch: IDispatchInterface) => {
    return await axios.post('/basket/', basketItem)
        .then((res) => {
            dispatch({
                type: SET_BASKET,
                payload: res.data
            })
        })
        .catch((err) => console.log(err));
}

export const getUserData = () => async (dispatch: any) => {
    dispatch({
        type: LOADING_USER
    })
    return await axios.get(`/token/verify_user/`)
        .then((res) => {
            dispatch({
                type: SET_USER,
                payload: res.data
            })
        })
        .catch((err) => console.log(err));
}

export const getUserPurchasedProducts = () => async (dispatch: IDispatchInterface) => {
    return await axios.get(`/my-purchased-products/`)
        .then((res) => dispatch({
            type: SET_PURCHASED_PRODUCTS,
            payload: res.data
        }))
        .catch((err) => {
            console.log(err)
        })
}

export const checkoutBasket = (navigate: any) => async (dispatch: IDispatchInterface) => {
    return await axios.get(`/checkout/`)
        .then(() => {
            dispatch({
                type: SET_BASKET,
                payload: []
            })
            navigate('/my-purchases/')
        })
        .catch((err) => console.log(err));
}