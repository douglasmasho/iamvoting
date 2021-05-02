import React, {useEffect, useRef} from 'react';
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import {Route, Redirect, Link} from "react-router-dom";
import firebase from 'firebase/app';
import {connect} from "react-redux";
import EditorEdit from './EditorEdit';
import JustAnimation from './JustAnimation';

const EEParent = (props) => {
    useEffect(()=>{
        console.log(props.article);
        console.log(props.match.params.articleID)
    })

    if(!props.auth && !firebase.auth().currentUser){
        return  <Redirect to="/write/account"/>
    }

    return (
        <>
          {props.article && props.article[0].articleID === props.match.params.articleID ? <EditorEdit article={props.article} articleID={props.match.params.articleID}/> : <JustAnimation/>}
        </>
    )
}

const mapStateToProps = state=>({ //is the state in the store ///will take the state from the store and put it as props in the component that is being connected
    auth: state.authStatus,
    article: state.firestore.ordered.allArticles
  });


  export default compose(
    connect(mapStateToProps),
    firestoreConnect(props=>[{collection: "allArticles", doc: props.match.params.articleID}]))
    (EEParent);



