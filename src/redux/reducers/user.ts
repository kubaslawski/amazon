import {
    LOADING_USER,
    SET_USER,
    SET_AUTHENTICATED,
    SET_UNAUTHENTICATED,
    SET_BASKET,
    SET_PURCHASED_PRODUCTS,
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

interface ICredentials {
    address: IAddress;
    id: number;
    basket_count: number;
    email: string;
    first_name: string;
    last_name: string;
}

export interface IPurchasedProduct {
    product: IProduct;
    quantity: number;
}

export interface IUsersInitialState {
    authenticated: boolean;
    basket: Array<IBasketItemObject>;
    credentials: ICredentials;
    loading: boolean;
    purchasedProducts: Array<IPurchasedProduct>;
}


const initialState = {
    authenticated: false,
    basket: [] as Array<IBasketItemObject>,
    credentials: {
        address: {
            country: '',
            state: '',
            city: '',
            street: '',
            post_code: '',
        },
        id: 0,
        basket_count: 0,
        email: '',
        first_name: '',
        last_name: ''
    },
    loading: false,
    purchasedProducts: [] as Array<IPurchasedProduct>
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
            let basket_count = 0;
            action.payload.forEach((obj: IBasketItemObject) => {
                basket_count += obj.quantity
            })
            return {
                ...state,
                credentials: {
                    ...state.credentials,
                    basket_count: basket_count
                },
                basket: action.payload
            }
        case SET_PURCHASED_PRODUCTS:
            return {
                ...state,
                purchasedProducts: action.payload
            }
        default: return state
    }
}
