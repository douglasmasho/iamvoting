import React, {useEffect} from 'react'
import {Route, Redirect, Link} from "react-router-dom";
import firebase from 'firebase/app';
import {connect} from "react-redux";
import Editor from "./Editor";
import {nanoid} from "nanoid";
import Plus from "../assets/plus.svg";

const Articles = (props) => {
  
  useEffect(()=>{    
    if(firebase.auth().currentUser){
      console.log(firebase.auth().currentUser)
      console.log(firebase.auth().currentUser.displayName);
    }
  })

  const link = `/write/articles/new/${nanoid(12)}`

  if(!props.auth && !firebase.auth().currentUser){
    return <Redirect to="/write/account"/>
  }
  

    return (
        <div className="screen ">
          <div class="u-margin-bottom">
            <h1 className="screen__header">My Articles</h1>
            <div className="redline redline--aboutus showAbove" style={{marginTop: 0}}></div>
          </div>

              <div className="grid-3 grid">
                  <div className="grid-3--child article__item u-padding-large center-hrz--col">
                    <Link to={link}><img src={Plus} alt="" className="article__plus"/></Link> 
                    <h3>Add article</h3>   
                  </div>       
              </div>        
        </div>
    )
}

const mapStateToProps = state=>({ //is the state in the store ///will take the state from the store and put it as props in the component that is being connected
  auth: state.authStatus
});

export default connect(mapStateToProps)(Articles)
