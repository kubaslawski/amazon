import {ADD_CATEGORY, GET_ALL_CATEGORIES, SET_ERRORS} from "../types";
import axios from 'axios';
import {IDispatchInterface} from "../../interfaces/global";
import {ICategory} from "../../interfaces/categories";



export const getAllCategories = () => async (dispatch: IDispatchInterface) => {
    return await axios.get('/categories/')
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

export const addCategory = (category: ICategory) => async (dispatch: IDispatchInterface) => {
    return await axios.post('/category/', category)
        .then((res) => {
            dispatch({
                type: ADD_CATEGORY,
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

