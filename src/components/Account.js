import React, {useState, useEffect, useRef} from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import * as actionCreators from "../redux/actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Instagram from "../assets/instagram.svg";
import Twitter from "../assets/blacktwitter.svg";
import Facebook from "../assets/facebook.svg";
import ShowSocials from './ShowSocials';


const Account = (props) => {
  const modalRef = useRef();
  const [linkState, setLinkState] = useState("");
  const [site, setSite] = useState("");
  const overlayRef = useRef();
  const errorRef = useRef();

  const   uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      // firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }
  const openModal = ()=>{
    modalRef.current.classList.add("active");
    console.log("to the base");
    const overlay = overlayRef.current;
    overlay.classList.add("active");   

}
const closeModal = ()=>{
    modalRef.current.classList.remove("active");
    // console.log(modalRef.current.classList.add("active"))
    const overlay = overlayRef.current;
    overlay.classList.remove("active"); 
}

const handleChange = (e)=>{
  setLinkState(e.target.value);
}

const handleSubmit = (e)=>{
  console.log(linkState);
  e.preventDefault();

  ///do the thing here
  //first check if the link is correct
  switch(site){
    case "title":   
        console.log("this has been the title");
        addTitle();
        break;
    default: 
        if(!linkState.includes(site)){
          errorRef.current.style.display = "block";
          setTimeout(()=>{
            errorRef.current.style.display = "none";
          }, 3000)
        }else{
          addHandle()
        }
        break;
  }


}

const addTitle = ()=>{
  console.log("adding title");
  const firestore = firebase.firestore();
  async function add(){
    try{
      const addition = await firestore.collection("userArticles").doc(firebase.auth().currentUser.uid).update({
        title: linkState
      })
      console.log("addition successful", addition);
    }catch(e){
      console.log(e);
    }
  }

  add();

  closeModal();

}

  const addHandle = ()=>{
    console.log("adding handle")
    const firestore = firebase.firestore();
    async function add(){
      try{
        //check if it already exists
        const arr = await firestore.collection("userArticles").doc(firebase.auth().currentUser.uid).get();
        const newArr = arr.data()["socials"]  
        if(newArr.some(el=>el.type === site)){
          console.log("this already exists");
          //delete it
          const deletion = await firestore.collection("userArticles").doc(firebase.auth().currentUser.uid).update({
            socials: firebase.firestore.FieldValue.arrayRemove(newArr.find(el=>el.type === site))
          })
        }
        const addition = await firestore.collection("userArticles").doc(firebase.auth().currentUser.uid).update({
          socials: firebase.firestore.FieldValue.arrayUnion({
            type: site,
            link: linkState
          })
        });
        closeModal();
      }catch(e){
        console.log(e);
      }
    }

    add();
  }

  const removeHandle = ()=>{
    console.log("removing handle");
    const firestore = firebase.firestore();
    async function remove(){
      try{
          //check if it already exists
          const arr = await firestore.collection("userArticles").doc(firebase.auth().currentUser.uid).get();
          const newArr = arr.data()["socials"]  
          if(newArr.some(el=>el.type === site)){
             console.log("this already exists");
              //delete it
              const deletion = await firestore.collection("userArticles").doc(firebase.auth().currentUser.uid).update({
                socials: firebase.firestore.FieldValue.arrayRemove(newArr.find(el=>el.type === site))
              })
          }
      }catch(e){
        console.log(exports)
      }
    }

    remove();
  }
  //this function handles the isSigned in state whenever ther is a change in the authentication status
  useEffect(()=>{
    firebase.auth().onAuthStateChanged(user=>{
      console.log(user);
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
          <div className="u-margin-bottom-huge">
            <h1 className="screen__header">My Account</h1>
            <div className="redline redline--aboutus showAbove" style={{marginTop: 0}}></div>
          </div>
          <div className="center-hrz u-margin-bottom">
             <div className="account__pic" style={{backgroundImage: `url(${firebase.auth().currentUser.photoURL})`}}> </div>
          </div>

            <h1 style={{textAlign: "center"}} className="header-text red-ish-text">{firebase.auth().currentUser.displayName}</h1>
            <p className="normal-text white-text u-margin-bottom" style={{textAlign: "center"}}>uid: {firebase.auth().currentUser.uid}</p>
            {
              
            }
          <ShowSocials uid={firebase.auth().currentUser.uid}/>

          <div className="row center-hrz u-margin-bottom-big" style={{justifyContent: "space-evenly", alignItems: "space-evenly"}}>
            <button className="article__social__button  article__social__button--insta" onClick={()=>{
              openModal();
              setSite("instagram");
            }}><img src={Instagram} alt="" class="article__social__icon" />Edit</button>

            <button className="article__social__button" onClick={()=>{
              openModal();
              setSite("twitter");
            }}><img src={Twitter} alt="" className="article__social__icon"/>Edit</button>
            <button className="article__social__button" onClick={()=>{
              openModal();
              setSite("facebook");
            }}><img src={Facebook} alt="" className="article__social__icon"/>Edit</button>
            <button className="article__social__button" onClick={()=>{
              openModal();
              setSite("title");
            }}>Edit Title</button>
         </div>

         <div className="center-hrz u-margin-bottom-big">
             <button className="button" onClick={()=>firebase.auth().signOut()}>Sign Out</button>
          </div>

         <div className="modal"  ref={modalRef}>
              <button className="close-button" onClick={closeModal}>&times;</button>
              <form onSubmit={handleSubmit}>
                <div className="input-group center-hrz--col">
                  <input type="text" name="text" id="link" className="input-textbox" placeholder={`${site} ${site === "title" ? "" : "Link"}`} onChange={handleChange}  required/>
                  <label htmlFor="link" className="input--label" style={{textTransform: "capitalize"}}>{site} {site === "title" ? "" : "Link"}</label>
                </div>
                <p className="normal-text red-text center-text" style={{display: "none"}} ref={errorRef}>The link is not of the correct type, make sure it is a {site} profile link</p>
                <div className="center-hrz--col u-margin-top">
                <button type="submit" className="button u-margin-bottom">Submit</button>
                </div>
              </form>
              <div className="center-hrz">
                {site !== "title" ? <button className="button" style={{backgroundColor: 'black',}} onClick={()=>{
                    removeHandle();
                    closeModal();
                  }}> {site === "title" ? <span>Remove Title</span> : <span>Remove Link</span> }</button> : null}
                  
              </div>
          </div>

          <div className="overlay" ref={overlayRef}></div>
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

