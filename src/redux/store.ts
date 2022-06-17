import {combineReducers, applyMiddleware, compose, createStore} from "redux";
import thunk from 'redux-thunk';
import categoriesReducer, {ICategoriesInitialState} from './reducers/categories';
import productsReducer, {IProductsInitialState} from './reducers/products';
import userReducer, {IUsersInitialState} from './reducers/user';
import uiReducer, {IUIInitialState} from "./reducers/ui";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    user: userReducer,
    ui: uiReducer
})

export interface IState {
    categories: ICategoriesInitialState,
    products: IProductsInitialState,
    ui: IUIInitialState
}

const store = createStore(
    reducers,
    initialState,
    compose(
        applyMiddleware(...middleware),
    )
)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;