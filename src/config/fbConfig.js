import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import "firebase/analytics";
//remember to import whatever functionality you need from firebase

const firebaseConfig = {
    apiKey: "AIzaSyCKu33RFo02Wiu_6nZdUqcXVgT_wO8pn6o",
    authDomain: "iamvoting-628bb.firebaseapp.com",
    projectId: "iamvoting-628bb",
    storageBucket: "iamvoting-628bb.appspot.com",
    messagingSenderId: "879672933408",
    appId: "1:879672933408:web:084a9ab0dac7f4dd5d1045",
    measurementId: "G-8ZVTD4VNF9"
  };



  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
//   firebase.firestore().settings({ timestampInSnapShots});

export default firebase; 