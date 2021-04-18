import React from 'react';
import ReactDOM from 'react-dom';
import "./sass/main.scss";
import App from './App';
import rootReducer from "./redux/reducers";
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import thunk from "redux-thunk";
import {reduxFirestore, getFirestore, createFirestoreInstance} from "redux-firestore";//interact with firestore
import {reactReduxFirebase ,getFirebase, ReactReduxFirebaseProvider} from "react-redux-firebase"; //interact with firebase
import fbConfig from "./config/fbConfig";
import firebase from 'firebase/app'
//create the store==>state will be stored here
let store = createStore(rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(fbConfig),//so we can use firestore in the thunk functions
    // reactReduxFirebase(fbConfig) //so we can use firebase in the thunk functions
    )
  );

  const rrfProps = {
    firebase,
    config: fbConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
  };

ReactDOM.render( 
  <BrowserRouter>
  <ReactReduxFirebaseProvider {...rrfProps}>
  <Provider store = {store}>
        <App />
    </Provider>
  </ReactReduxFirebaseProvider>

  </BrowserRouter>
  ,
  document.getElementById('root')
);
