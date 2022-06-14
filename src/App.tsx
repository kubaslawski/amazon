import React from 'react';
import './App.scss';
import "./scss/global.scss";
import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
// Redux
import {Provider} from "react-redux";
import store from "./redux/store";
// Axios
import axios from "axios";
// react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// pages
import ProductsPage from "./app/pages/products-page/products-page";
import AddProductPage from "./app/pages/add-product/add-product";
// components
import Header from "./app/components/header/header";
import SecondHeader from "./app/components/second-header/second-header";
import ProductPage from "./app/pages/product-page/product-page";

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
                    </Routes>
                </Provider>
            </div>
        </Router>
    );
}

export default App;
