import React from 'react';
import './App.scss';
import "./scss/global.scss";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
// Redux
import {Provider} from "react-redux";
import store from "./redux/store";
// Pages
import HomePage from "./app/pages/home";

// Axios
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/server-de7cd/europe-central2/api"


function App() {
    
    return (
        <div className="app">
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route path="/">
                            <HomePage/>
                        </Route>
                    </Switch>
                </Router>
            </Provider>
        </div>
    );
}

export default App;
