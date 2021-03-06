import React, {useRef ,useEffect, useState} from 'react';
import * as actionCreators from "../redux/actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {Route} from "react-router-dom";
import Menu from "./Menu";
import Account from "./Account";
import Articles from "./Articles";
import firebase from 'firebase/app';
import ScrollToTop from "./ScrollToTop";
import Editor from "./Editor";
import EEParent from './EEParent';
import ShowPolls from './ShowPolls';
import NewPoll from './NewPoll';

const Dasboard = (props) => {
  const dashboardRef = useRef();
  const navRef = useRef();
  const navCloseRef = useRef();
  const [isSignedIn, setIsSignedIn] = useState(false);
  // const scrollDivRef = useRef();
  const scrollToTop = ()=>{
    if(document.querySelector(".screens")){
      document.querySelector(".screens").scrollTo(0,0);

    }
    console.log(document.querySelector(".scrollDiv"));
    // window.scrollTo(0,0);
  }
  const  uiConfig = {
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

  const linkClick=()=>{
    let currentLink = document.querySelector(".activeLink");
    if(currentLink){
        currentLink.classList.remove("activeLink")
    }
   }

   useEffect(()=>{
     console.log(props.match.params.action)
   })

   useEffect(()=>{
     firebase.auth().onAuthStateChanged(user=>{
       setIsSignedIn(!!user)
      //  if(user){
      //    setIsSignedIn(true)
      //  }else{
      //    setIsSignedIn(false)
      //  }
     })
   }, [])


   if(!props.password)
   {
    return <Redirect to="/"/>
   }

   let component;

   switch(props.match.params.action){
     case "account": component = <Account/>;
        break;
     case "articles": component = <Articles/>;
         break;
         default: //nothing
   }

    return (
      <div className="home">
        <ScrollToTop scrollToTop={scrollToTop}/>   
              <div id="dbnavigation" ref={navRef}>
                  <Menu/>
              </div>
              <div id="dashboard">
                <Route path="/write/account"  component={Account}/>
                <Route exact path="/write/articles"  render={routeArgs=>{
                    if(!props.auth && !firebase.auth().currentUser){
                      return <Redirect to="/write/account"/>
                    }
                  if(props.auth && firebase.auth().currentUser){
                    return <Articles uid={firebase.auth().currentUser.uid}/>
                  }       
                }}/>
                <Route exact path="/write/articles/new/:articleID" component={Editor}/>
                <Route exact path="/write/articles/edit/:articleID" component={EEParent}/>    
                <Route exact path="/write/polls" component={ShowPolls}/> 
                <Route exact path="/write/polls/new" component={NewPoll}/>  
              </div>
      </div>
    )
}

const mapStateToProps = state=>({ //is the state in the store ///will take the state from the store and put it as props in the component that is being connected
    password: state.password,
    auth: state.authStatus,
  });
  
  const mapDispatchToProps = dispatch=>{ //will allow you to dispatch actions from anywhere in the compoonent
    return bindActionCreators(actionCreators, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(Dasboard);