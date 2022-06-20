import React from 'react';
import './App.scss';
import "./scss/global.scss";
import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
// Redux
import {Provider, useDispatch, useSelector} from "react-redux";
import store from "./redux/store";
// externals
import axios from "axios";
import jwtDecode from "jwt-decode";
// react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// pages
import ProductsPage from "./app/pages/products-page/products-page";
import AddProductPage from "./app/pages/add-product/add-product";
import ProductPage from "./app/pages/product-page/product-page";
// components
import Header from "./app/components/header/header";
import SecondHeader from "./app/components/second-header/second-header";
import RegisterPage from "./app/pages/auth/register-page";
import LoginPage from "./app/pages/auth/login-page";
// actions
import {getUserData} from "./redux/actions/user";
// interfaces
import {IDispatchInterface} from "./interfaces/global";
import {SET_AUTHENTICATED} from "./redux/types";


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

axios.defaults.baseURL = "http://127.0.0.1:8000/amazon/"


function App() {

    return (
        <Router>
            <div className="app">
                <Header/>
                <SecondHeader/>
                <Provider store={store}>
                    <Routes>
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
