import {GET_ALL_PRODUCTS} from "../types";

interface IProductsInitialState {
    products: any;
    errors: Array<any>;
}

const initialState: IProductsInitialState = {
    products: [] as Array<any>,
    errors: [] as Array<any>
}

export default function(state= initialState, action: any){
    switch(action.type){
        case GET_ALL_PRODUCTS: {
            return {
                ...state,
                products: action.payload
            }
        }
        default: return state
    }
}

