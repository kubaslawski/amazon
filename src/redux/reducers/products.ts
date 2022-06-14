import {ADD_PRODUCT, GET_ALL_PRODUCTS} from "../types";
import {IProduct} from "../../interfaces/products";
import {IAction} from "../../interfaces/global";

interface IProductsInitialState {
    products: Array<IProduct>;
    errors: Array<any>;
}

const initialState: IProductsInitialState = {
    products: [] as Array<IProduct>,
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
        case ADD_PRODUCT: {
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        }
        default: return state
    }
}

