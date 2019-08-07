import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { Route, BrowserRouter as Router } from 'react-router-dom';
import LoginComponent from './login/login';
import DashboardComponent from './dashboard/dashboard';
import SignupComponent from './signup/signup';


const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
    apiKey: "AIzaSyBMODX1BdeoF_p7ReVxJQd8IzuMjhsvtsQ",
    authDomain: "im-messenger-1229a.firebaseapp.com",
    databaseURL: "https://im-messenger-1229a.firebaseio.com",
    projectId: "im-messenger-1229a",
    storageBucket: "im-messenger-1229a.appspot.com",
    messagingSenderId: "634347323147",
    appId: "1:634347323147:web:67165167b80df4d3"
});

const routing = (
    <Router>
        <div id='routing-container'>
        <Route path = '/login' component={LoginComponent}></Route>
        <Route path = '/dashboad' component={DashboardComponent}></Route>
        <Route path = '/signup' component={SignupComponent}></Route>
        </div>
    </Router>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
