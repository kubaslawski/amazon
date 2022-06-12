import {ADD_CATEGORY, GET_ALL_CATEGORIES} from "../types";
import {ICategory, ISubCategory} from "../../interfaces/categories";

interface ICategoriesInitialState {
    categories: Array<ICategory>;
    category?: ICategory;
    errors: Array<any>;
}

const initialState: ICategoriesInitialState = {
    categories: [] as Array<ICategory>,
    errors: [] as Array<any>
}

export default function(state= initialState, action: any){
    switch(action.type){
        case GET_ALL_CATEGORIES: {
            return {
                ...state,
                categories: action.payload
            }
        }
        case ADD_CATEGORY: {
            return {
                ...state,
                categories: [...state.categories, action.payload]
            }
        }
        default: return state
    }
}

