import {
    SET_USER,
    SET_AUTHENTICATED,
    SET_UNAUTHENTICATED,
    LOADING_UI, SET_ERRORS
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
            navigate('/products')
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