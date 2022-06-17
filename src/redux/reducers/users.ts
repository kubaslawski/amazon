import {
    SET_USER,
    SET_AUTHENTICATED,
    SET_UNAUTHENTICATED
} from "../types";
import {IAction} from "../../interfaces/global";

interface IUsersInitialState {
    authenticated: boolean;
    credentials: unknown;
}


const initialState = {
    authenticated: false,
    credentials: {}
};

export default function (state: IUsersInitialState=initialState, action: IAction){
    switch(action.type){
        case SET_AUTHENTICATED:
            return {
                ...state,
                authenticated: true
            }
        case SET_UNAUTHENTICATED:
            return initialState;
        case SET_USER:
            return {
                authenticated: true,
                ...action.payload
            }
        default: return state
    }


}
