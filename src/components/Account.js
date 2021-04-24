import React, {useState, useEffect} from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import * as actionCreators from "../redux/actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";


const Account = (props) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const   uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  //this function handles the isSigned in state whenever ther is a change in the authentication status
  useEffect(()=>{
    firebase.auth().onAuthStateChanged(user=>{
      props.setAuthStatus(!!user)//this should be universal state
     //  if(user){
     //    setIsSignedIn(true)
     //  }else{
     //    setIsSignedIn(false)
     //  }
    })
  }, [])

    return (
        <div className="screen">
          {props.auth && firebase.auth().currentUser ? 
          <>
          <p class="white-text">signed in!</p>
          <button className="button" onClick={()=>firebase.auth().signOut()}>Sign Out</button>
          <h1>Welcome {firebase.auth().currentUser.displayName}, your uID is {firebase.auth().currentUser.uid}</h1>
          <img src={firebase.auth().currentUser.photoURL} alt=""/>
          </>
: <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>}
        </div>
    )
}

const mapStateToProps = state=>({ //is the state in the store ///will take the state from the store and put it as props in the component that is being connected
  auth: state.authStatus
});

const mapDispatchToProps = dispatch=>{ //will allow you to dispatch actions from anywhere in the compoonent
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);

