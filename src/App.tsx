import React from 'react';
import './App.css';
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
        <Provider store={store}>
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/">
                        <HomePage/>
                    </Route>
                </Switch>
            </Router>
        </Provider>
    
    );
}

export default App;
