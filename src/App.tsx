import React from 'react';
import './App.scss';
import "./scss/global.scss";
import {Routes, Route, BrowserRouter as Router, Link} from "react-router-dom";
// Redux
import {Provider} from "react-redux";
import store from "./redux/store";
// Axios
import axios from "axios";
import Navbar from "./app/components/navbar/navbar";
// react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// pages
import ProductPage from "./app/pages/product-page/product-page";
import AddProductPage from "./app/pages/add-product/add-product";
// components
import Header from "./app/components/header/header";
import SecondHeader from "./app/components/second-header/second-header";

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
                            element={<ProductPage/>}
                        />
                        <Route
                            path="/add-product"
                            element={<AddProductPage/>}
                        />
                    </Routes>
                </Provider>
            </div>
        </Router>
    );
}

export default App;
