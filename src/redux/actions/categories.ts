import {GET_ALL_CATEGORIES, SET_ERRORS} from "../types";
import axios from 'axios';
import {IDispatchInterface} from "../../interfaces/global";



export const getAllCategories = () => (dispatch: IDispatchInterface) => {
    axios.get('/categories')
        .then((res) => {
            dispatch({
                type: GET_ALL_CATEGORIES,
                payload: res.data
            });
        })
        .catch((err) => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
        })
}