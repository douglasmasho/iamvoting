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
      // firebase.auth.EmailAuthProvider.PROVIDER_ID
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
          <div class="u-margin-bottom-huge">
            <h1 className="screen__header">My Account</h1>
            <div className="redline redline--aboutus showAbove" style={{marginTop: 0}}></div>
          </div>
          <div className="center-hrz u-margin-bottom">
             <div className="account__pic" style={{backgroundImage: `url(${firebase.auth().currentUser.photoURL})`}}> </div>
          </div>

            <h1 style={{textAlign: "center"}} className="header-text red-ish-text">{firebase.auth().currentUser.displayName}</h1>
            <p className="normal-text white-text" style={{textAlign: "center"}}>uid: {firebase.auth().currentUser.uid}</p>
          <div className="center-hrz u-margin-top u-margin-bottom-huge">
             <button className="button" onClick={()=>firebase.auth().signOut()}>Sign Out</button>
          </div>
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

