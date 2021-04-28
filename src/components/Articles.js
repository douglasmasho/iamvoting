import React, {useEffect} from 'react'
import {Route, Redirect, Link} from "react-router-dom";
import firebase from 'firebase/app';
import {connect} from "react-redux";
import Editor from "./Editor";


const Articles = (props) => {



  
  useEffect(()=>{
    
    if(firebase.auth().currentUser){
      console.log(firebase.auth().currentUser)
      console.log(firebase.auth().currentUser.displayName);
    }
  })
  

    return (
        <div className="screen ">
          {
            props.auth && firebase.auth().currentUser ? 
            <>
              <div className="grid-3 grid">
                  <div className="grid-3--child article__item">
                    <Link to="/write/articles/new">New</Link>
                    
                  </div>       
              </div>
            </>
             : <Redirect to="/write/account"/>
          }
          
          
        </div>
    )
}

const mapStateToProps = state=>({ //is the state in the store ///will take the state from the store and put it as props in the component that is being connected
  auth: state.authStatus
});

export default connect(mapStateToProps)(Articles)
