import React from 'react';
import './App.scss';
import "./scss/global.scss";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
// Redux
import {Provider} from "react-redux";
import store from "./redux/store";
// Pages
import HomePage from "./app/components/navbar/navbar";
import ProductPage from "./app/pages/product/product";
// Axios
import axios from "axios";
import Navbar from "./app/components/navbar/navbar";
// react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

axios.defaults.baseURL = "http://localhost:5000/server-de7cd/europe-central2/api"


function App() {
    
    return (
        <div className="app">
            <Provider store={store}>
                <Router>
                    <Navbar/>
                    <Switch>
                        <Route path="/" component={ProductPage}/>
                    </Switch>
                </Router>
            </Provider>
        </div>
    );
}

export default App;
