import React, {useEffect, useRef} from 'react';
import {connect} from "react-redux";
import Navbar from './Navbar';
import Footer from './Footer';
import moment from "moment";
import FacebookIcon from "../assets/facebookwhite.svg";
import TwitterIcon from "../assets/twitter.svg";
import InstagramIcon from "../assets/instagramwhite.svg";
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";
import Loading from './Loading';


const SingleArticle = (props) => {

    useEffect(()=>{
        console.log("i rendered")
    })
    return (
        <>
        <Navbar/>
        {
            props.currentArticlee && props.currentArticlee[0] ?   <div  className="singleArticle">
            <div className="singleArticle__header">
                <div className="singleArticle__header__banner" style={{backgroundImage: `url(${props.currentArticlee[0].banner})`}}>
                </div>
                <div className="singleArticle__header__bottom row">
                    <div className="singleArticle__header__bottom--1 center-vert">
                        <h2>{props.currentArticlee[0].title}</h2>
                        <p>{moment(props.currentArticlee[0].createdAt.toDate()).format("MMM Do YY")}</p>
                    </div>
                    <div className="singleArticle__header__bottom--2 center-vert">
                        <div className="row"style={{justifyContent: "center"}}>
                            <div>
                            <img src={props.currentArticlee[0].authorDetails.photo} alt="author picture" className="singleArticle__header__bottom--2__picture u-margin-right"/>
                            </div>
                           <div className="center-vert">
                            <h3 className="white-text bigger-text" style={{textAlign: "left", justifyContent: "flex-start"}}>{props.currentArticlee[0].authorDetails.name}</h3>
                            <h4 className="white-text normal-text" style={{textAlign: "left", justifyContent: "flex-start"}}>{props.currentArticlee[0].authorDetails.title}</h4>
                           </div>      
                        </div>

                        <div className="singleArticle__header__bottom--2__socials">
                        {
                            props.currentArticlee[0].authorDetails.socials.map(obj=>obj).sort((a,b)=>a.type.localeCompare(b.type)).map(socialItem=>{
                                let iconSrc;
                                switch(socialItem.type){
                                    case "twitter": iconSrc = TwitterIcon;
                                    break;
                                    case "facebook": iconSrc = FacebookIcon;
                                    break;
                                    case "instagram": iconSrc = InstagramIcon;
                                    break;
                                    default: iconSrc = "";
                                    break;
                                }
                                return (
                                    <a key={socialItem.type} href={socialItem.link} target="_blank">
                                         <img src={iconSrc} alt="" className="singleArticle__header__bottom--2__socials__icon"/>
                                    </a>
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>         
        </div> : <Loading/>
        }
        <Footer/>

        </>
    )
}

const mapStateToProps = state=>{
    return {
      currentArticlee: state.firestore.ordered.allArticles,
    }
  }

export default compose(
    connect(mapStateToProps),
    firestoreConnect(props=>[{collection: "allArticles", doc: props.match.params.articleID}])
)(SingleArticle)