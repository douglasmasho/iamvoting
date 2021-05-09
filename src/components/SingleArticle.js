import React, {useEffect, useRef} from 'react';
import {connect} from "react-redux";
import Navbar from './Navbar';
import Footer from './Footer';
import moment from "moment";
import FacebookIcon from "../assets/facebookwhite.svg";
import TwitterIcon from "../assets/twitter.svg";
import InstagramIcon from "../assets/instagramwhite.svg";

const SingleArticle = (props) => {
    const article = props.currentArticle
    useEffect(()=>{
        console.log(props.currentArticle.actualDate);
    })
    return (
        <>
        <Navbar/>
            <div  className="singleArticle">
                <div className="singleArticle__header">
                    <div className="singleArticle__header__banner" style={{backgroundImage: `url(${article.banner})`}}>
                    </div>
                    <div className="singleArticle__header__bottom row">
                        <div className="singleArticle__header__bottom--1 center-vert">
                            <h2>{article.title}</h2>
                            <p>{article.actualDate}</p>
                        </div>
                        <div className="singleArticle__header__bottom--2 center-vert">
                            <div className="row"style={{justifyContent: "center"}}>
                                <div>
                                <img src={article.authorDetails.photo} alt="author picture" className="singleArticle__header__bottom--2__picture u-margin-right"/>
                                </div>
                               <div className="center-vert">
                                <h3 className="white-text bigger-text" style={{textAlign: "left", justifyContent: "flex-start"}}>{article.authorDetails.name}</h3>
                                <h4 className="white-text normal-text" style={{textAlign: "left", justifyContent: "flex-start"}}>{article.authorDetails.title}</h4>
                               </div>      
                            </div>

                            <div className="singleArticle__header__bottom--2__socials">
                            {
                                article.authorDetails.socials.map(obj=>obj).sort((a,b)=>a.type.localeCompare(b.type)).map(socialItem=>{
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
            </div>
        <Footer/>

        </>
    )
}

const mapStateToProps = state=>{
    return {
      articles: state.firestore.ordered.allArticles,
      currentArticle: state.currentArticle
    }
  }

export default connect(mapStateToProps)(SingleArticle)