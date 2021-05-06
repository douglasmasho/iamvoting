import React, {useEffect, useRef} from 'react';
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import {connect} from "react-redux";
import firebase from 'firebase/app';
import JustAnimation from './JustAnimation';


const ShowSocials = (props) => {
    useEffect(() => {
        if(props.articles){
            console.log(props.articles[0].socials)
            console.log(props.articles[0].socials.map(el=>el).sort((a,b)=> a.type.localeCompare(b.link)));
            console.log(props.articles[0].title)
        }
    });
    return (
        <div>
            {props.articles ? <div className="u-margin-bottom">
                {props.articles[0].socials.map(el=>el).sort((a,b)=> a.type.localeCompare(b.type)).map(el=>(<p className="white-text normal-text center-text "><span className="bigger-text red-ish-text capitalize-text">{el.type}:</span> {el.link}</p>))}
            </div> : <JustAnimation/>}

            {props.articles ? props.articles[0].title ? <p className="white-text normal-text center-text "><span className="bigger-text red-ish-text capitalize-text">Title:</span> {props.articles[0].title}</p> : <p className="white-text normal-text center-text ">Please enter your title in order to write articles</p> : <JustAnimation/>}
        </div>
    )
}

const mapStateToProps = state=>{

    return {
      auth: state.authStatus,
      articles: state.firestore.ordered.userArticles
    }
  }

export default compose(
    connect(mapStateToProps),
    firestoreConnect(props=>[{collection: "userArticles", doc: props.uid}])
)(ShowSocials)
