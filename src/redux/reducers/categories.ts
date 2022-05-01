import {GET_ALL_CATEGORIES} from "../types";
import {ICategories} from "../../interfaces/categories";

interface ICategoriesInitialState {
    categories: Array<ICategories>;
    errors: Array<any>;
}

const initialState: ICategoriesInitialState = {
    categories: [] as Array<ICategories>,
    errors: [] as Array<any>
}

export default function(state=initialState, action: any){
    switch(action.type){
        case GET_ALL_CATEGORIES: {
            return {
                ...state,
                categories: action.payload
            }
        }
        default: return state
    }
}