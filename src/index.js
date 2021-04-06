import React from 'react';
import ReactDOM from 'react-dom';
import "./sass/main.scss";
import App from './App';
import rootReducer from "./redux/reducers";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import thunk from "redux-thunk";

//create the store==>state will be stored here
let store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render( 
  <Provider store = {store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);
