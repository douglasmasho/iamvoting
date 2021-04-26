import React, {useEffect} from 'react'
import {Route, Redirect} from "react-router-dom";
import firebase from 'firebase/app';
import {connect} from "react-redux";


const Articles = (props) => {



  
  useEffect(()=>{
    
    if(firebase.auth().currentUser){
      console.log(firebase.auth().currentUser)
      console.log(firebase.auth().currentUser.displayName);
    }
  })
  

    return (
        <div className="screen">
          {
            props.auth && firebase.auth().currentUser ? 
            <>
              <div className="grid-3 grid">
                  <div className="grid-3--child article__item">
                    iuhihuiu
                  </div>       
              </div>
            </>
             : <Redirect to="/write/account"/>
          }
          <Route path="/write/articles/new" render={()=>{
            return props.auth && firebase.auth().currentUser ? <p className="white-text">your uid is {firebase.auth().currentUser.uid}</p> : <Redirect to="/write/account"/>}
          }/>
        </div>
    )
}

const mapStateToProps = state=>({ //is the state in the store ///will take the state from the store and put it as props in the component that is being connected
  auth: state.authStatus
});

export default connect(mapStateToProps)(Articles)
