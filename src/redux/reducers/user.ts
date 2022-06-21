import {
    SET_USER,
    SET_AUTHENTICATED,
    SET_UNAUTHENTICATED, LOADING_USER
} from "../types";

export interface IUsersInitialState {
    authenticated: boolean;
    credentials: unknown;
    loading: boolean;
}


const initialState = {
    authenticated: false,
    credentials: {},
    loading: false
};

export default function (state: IUsersInitialState=initialState, action: any){
    switch(action.type){
        case LOADING_USER:
            return {
                ...state,
                loading: true
            }
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
                loading: false,
                credentials: action.payload
            }
        default: return state
    }
}
