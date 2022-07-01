import {ADD_PRODUCT, GET_ALL_PRODUCTS, GET_PRODUCT} from "../types";
import {IProduct} from "../../interfaces/products";
import {IAction} from "../../interfaces/global";
import {ISubCategory} from "../../interfaces/categories";

export interface IProductsInitialState {
    products: Array<IProduct>;
    product: IProduct;
    errors: Array<any>;
}

const initialState: IProductsInitialState = {
    products: [] as Array<IProduct>,
    product: {
        id: 0,
        category: {
            title: '',
            photo: '',
            pk: '',
            sub_categories: [] as Array<ISubCategory>
        },
        sub_category: {
            title: '',
            photo: '',
            id: '',
        },
        name: '',
        description: '',
        stock: 0,
        price: 0,
        photo: '',
        product_rating: {
            avg_rate: 0,
            rate_count: 0
        }
    },
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

