import {combineReducers, applyMiddleware, compose, createStore} from "redux";
import thunk from 'redux-thunk';
import categoriesReducer from './reducers/categories';

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
    categories: categoriesReducer
})


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