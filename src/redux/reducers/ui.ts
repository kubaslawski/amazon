import {
    SET_ERRORS,
    CLEAR_ERRORS,
    LOADING_UI,
    STOP_LOADING_UI
} from "../types";
import {IAction} from "../../interfaces/global";

export interface IUIInitialState {
    errors: Array<string>;
    loading: boolean;
    message: string;
}

const initialState: IUIInitialState = {
    loading: false,
    errors: [] as Array<string>,
    message: ''
}

export default function(state: IUIInitialState = initialState, action: IAction){
    switch(action.type){
        case SET_ERRORS:
            return {
                ...state,
                loading: false,
                errors: action.payload
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                loading: false,
                errors: null
            }
        case LOADING_UI:
            return {
                ...state,
                loading: true
            }
        case STOP_LOADING_UI:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}