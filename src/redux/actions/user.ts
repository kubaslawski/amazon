import {
    SET_USER,
    LOADING_UI,
    SET_ERRORS,
    CLEAR_ERRORS,
    LOADING_USER
} from "../types";
// external libraries
import axios from 'axios';
// interfaces
import {IDispatchInterface} from "../../interfaces/global";
import {IAuth} from "../../interfaces/users";

export const loginUser = (userData: IAuth, navigate:any) => (dispatch: IDispatchInterface) => {
    dispatch({type: LOADING_UI});
    axios.post('/token/', userData)
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

const setAuthorizationToken = (token:string) => {
    const bearerToken = `Bearer ${token}`
    localStorage.setItem('token', bearerToken);
    axios.defaults.headers.common['Authorization'] = bearerToken;
}

export const getUserData = () => (dispatch: any) => {
    dispatch({
        type: LOADING_USER
    })
    axios.get(`/token/verify_user/`)
        .then((res) => {
            dispatch({
                type: SET_USER,
                payload: res.data
            })
        })
        .catch((err) => console.log(err));
}