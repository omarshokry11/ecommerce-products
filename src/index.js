import React from 'react';
import ReactDOM from 'react-dom/client';
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from 'react-router-dom';
import App from './App';

//Style
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Style/Main.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App /></BrowserRouter>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();