import {
    SET_ERRORS,
    CLEAR_ERRORS,
    LOADING_UI,
    STOP_LOADING_UI
} from "../types";
import {IAction} from "../../interfaces/global";

export interface IUIInitialState {
    loading: boolean;
    errors: unknown;
}

const initialState: IUIInitialState = {
    loading: false,
    errors: null
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