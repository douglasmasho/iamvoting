import React, {Component, useRef, useEffect, useState} from 'react';
import * as actionCreators from "../redux/actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {Link, Route} from "react-router-dom";
import BackIcon from "../assets/back.svg"
import Logo from "../assets/iamvotingnam.svg";
import Menu from "./Menu";
import Account from "./Account";
import Articles from "./Articles";
import Events from "./Events";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';

    
// firebase.initializeApp({
//   apiKey: "AIzaSyCKu33RFo02Wiu_6nZdUqcXVgT_wO8pn6o",
//   authDomain: "iamvoting-628bb.firebaseapp.com"
// })

const Dasboard = (props) => {
  const dashboardRef = useRef();
  const navRef = useRef();
  const navCloseRef = useRef();
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

  //  useEffect(()=>{
  //   let menuLinks = document.querySelectorAll(".menu--link");
  //   const x = window.matchMedia("(max-width: 600px)");

  //     //query function 
  //     // let closeNavinQ = (x)=>{
  //     //     if(x.matches){
  //     //         menuLinks.forEach((e)=>{
  //     //             e.addEventListener("click", closeNav);
  //     //         })
  //     //     }
  //     // }

  //     // //create the initial listener, runs when the app is started
  //     // closeNavinQ(x);
  //     // //create the listener for state change, that runs the query function on every state change
  //     // x.addListener(closeNavinQ);
  //     // x.addListener(()=>{
  //     //     window.location.reload();
  //     // })
  //  },[])
   
  //  const expandNav=()=>{
  //   const nav = navRef.current; ///expand 
  //   const menus = document.querySelectorAll(".menu--sub");///give these a display of block;
  //   const closeNav = navCloseRef.current;

  //   menus.forEach(e=>{
  //       e.style.display= "block";
  //   })


  //   nav.style.animation = "expand 0.4s forwards";
  //   closeNav.style.display = "block";
// }

// const closeNav=()=>{
//     const nav = navRef.current; ///expand 
//     const menus = document.querySelectorAll(".menu--sub");///give these a display of block;
//     // const bottomDiv = bottomDivRef.current//give a display of block;
//     const closeNav = navCloseRef.current;
    
//     menus.forEach(e=>{
//         e.style.display= "none";
//     })

//     nav.style.animation = "collapse 0.3s forwards";
//     closeNav.style.display = "none";
// }


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
     case "events": component = <Events/>

   }

    return (
      <div className="home">
              <div id="dbnavigation" ref={navRef}>
                  <Menu/>
              </div>
              <div id="dashboard">
                iuhiuhiu <br/>
                ugiugiugiug
                <Route path="/write/account"  component={Account}/>
                <Route path="/write/articles"  component={Articles}/>
                <Route path="/write/events"  component={Events}/>
              </div>
      </div>
    )
}

const mapStateToProps = state=>({ //is the state in the store ///will take the state from the store and put it as props in the component that is being connected
    password: state.password
  });
  
  const mapDispatchToProps = dispatch=>{ //will allow you to dispatch actions from anywhere in the compoonent
    return bindActionCreators(actionCreators, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(Dasboard);