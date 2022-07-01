import {
    LOADING_USER,
    SET_USER,
    SET_AUTHENTICATED,
    SET_UNAUTHENTICATED, SET_BASKET,
} from "../types";
// interfaces
import {IProduct} from "../../interfaces/products";

export interface IAddress {
    country: string;
    state: string;
    city: string;
    street: string;
    post_code: string;
}

export interface IBasketItemObject {
    basket: number;
    product: IProduct;
    quantity: number;
}

export interface IUsersInitialState {
    address: IAddress;
    authenticated: boolean;
    basket: Array<IBasketItemObject>;
    credentials: unknown;
    loading: boolean;
}


const initialState = {
    address: {
        country: '',
        state: '',
        city: '',
        street: '',
        post_code: '',
    },
    authenticated: false,
    basket: [] as Array<IBasketItemObject>,
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
        case SET_BASKET:
            return {
                ...state,
                basket: action.payload
            }
        default: return state
    }
}
