import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";


import { BrowserRouter as Router, Route } from 'react-router-dom';
import  Routes from './router';



// updateUserState(store);

ReactDOM.render(

<Router>
    <Routes />
</Router>
, document.getElementById('root'));

