import React from 'react';
import './App.scss';
import "./scss/global.scss";
import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
// Redux
import {Provider} from "react-redux";
import store from "./redux/store";
// externals
import axios from "axios";
import jwtDecode from "jwt-decode";
// react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// components
import Header from "./app/components/header/header";
import SecondHeader from "./app/components/second-header/second-header";
// actions
import {getUserData} from "./redux/actions/user";
import {SET_AUTHENTICATED} from "./redux/types";
// pages
import ProductsPage from "./app/pages/products-page/products-page";
import AddProductPage from "./app/pages/add-product/add-product";
import ProductPage from "./app/pages/product-page/product-page";
import RegisterPage from "./app/pages/auth/register-page";
import LoginPage from "./app/pages/auth/login-page";
import BasketPage from "./app/pages/basket-page/basket-page";
import HomePage from "./app/pages/home-page/home-page";
import PurchasedProductsPage from "./app/pages/purchased-products-page/purchased-products-page";
import RateProductPage from "./app/pages/rate-product-page/rate-product-page";


export const appURL = "http://127.0.0.1:8000"
axios.defaults.baseURL = "http://127.0.0.1:8000/amazon/"

const token = localStorage.getItem('token');
if(token){
    const decodedToken:any = jwtDecode(token);
    if(decodedToken.exp * 1000 < Date.now()){
    } else {
        store.dispatch({
            type: SET_AUTHENTICATED
        })
        axios.defaults.headers.common['Authorization'] = token;
        store.dispatch(getUserData())
    }
}

function App() {

    return (
        <Router>
            <div className="app">
                <Provider store={store}>

                    <Header/>
                    <SecondHeader/>
                    <Routes>
                        <Route
                            path="/"
                            element={<HomePage/>}
                        />
                        <Route
                            path="/products"
                            element={<ProductsPage/>}
                        />
                        <Route
                            path="/add-product"
                            element={<AddProductPage/>}
                        />
                        <Route
                            path="/product/:id"
                            element={<ProductPage/>}
                        />
                        <Route
                            path="/category/:id"
                            element={<ProductsPage/>}
                        />
                        <Route
                            path={'/basket'}
                            element={<BasketPage/>}
                        />
                        <Route
                            path={'/my-purchases'}
                            element={<PurchasedProductsPage/>}
                        />
                        <Route
                            path={'/rate-product/:productId'}
                            element={<RateProductPage/>}
                        />
                        <Route
                            path="/register"
                            element={<RegisterPage/>}
                        />
                        <Route path="/login"
                               element={<LoginPage/>}
                        />
                    </Routes>
                </Provider>
            </div>
        </Router>
    );
}

export default App;
