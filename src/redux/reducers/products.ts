import {ADD_PRODUCT, GET_ALL_PRODUCTS, GET_PRODUCT} from "../types";
import {IProduct} from "../../interfaces/products";
import {IAction} from "../../interfaces/global";

export interface IProductsInitialState {
    products: Array<IProduct>;
    product: IProduct;
    errors: Array<any>;
}

const initialState: IProductsInitialState = {
    products: [] as Array<IProduct>,
    product: null as unknown as IProduct,
    errors: [] as Array<any>
}

export default function(state= initialState, action: IAction){
    switch(action.type){
        case GET_ALL_PRODUCTS: {
            return {
                ...state,
                products: action.payload
            }
        }
        case GET_PRODUCT: {
            return {
                ...state,
                product: action.payload
            }
        }
        case ADD_PRODUCT: {
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        }
        default: return state
    }
}

