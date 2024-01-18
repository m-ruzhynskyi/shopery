import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App/App';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('wrapper'));
root.render(
    <BrowserRouter basename={'/'}>
        <App/>
    </BrowserRouter>
);