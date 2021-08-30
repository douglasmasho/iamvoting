import React, {useEffect} from 'react';
import firebase from 'firebase/app';
import {connect} from "react-redux";
import Navbar from './Navbar';
import Footer from './Footer';
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";
import Loading from './Loading';
import {Link} from "react-router-dom";
import moment from "moment";
import * as actionCreators from "../redux/actions";
import {bindActionCreators} from "redux";
import {Timeline, Tween } from 'react-gsap';
import BG from "../assets/bgs/articles.jpg";


import Header from "../assets/socialnoticeicon.svg";

const Read = (props) => {
    useEffect(()=>{
        if(props.articles){
            // console.log(props.currentArticle);
        }
    })

    useEffect(()=>{

    })
    return (
        <>
        <Navbar/>
            <div className="u-padding-top-larger articlesList__div">
            <div className="herodiv" style={{backgroundImage: `linear-gradient(90deg, rgb(255, 255, 255) 0%, rgba(0,19,255,0.18531162464985995) 65%), url(${BG})`}}>
                <img src={Header} alt="header" className="articles__header"/>
            </div>

    
            <div className="center-hrz u-padding-top-large u-margin-bottom-big">
              {/* <h1 className="aboutus__intro-title">Articles</h1> */}
            </div>    
            
            <div className="grid-2 grid u-margin-bottom-big">
                {
                    props.articles ? props.articles.length > 0 ? props.articles.map(obj=>obj).sort((a,b)=>b.createdAt.valueOf() - a.createdAt.valueOf()).map(article=> !article.draft ? (   
                    <Link key={article.articleID} to={`/read/${article.articleID}`} onClick={()=>{
                        props.setArticle({
                            ...article,
                            actualDate: moment(article.createdAt.toDate()).format("MMM Do YY")
                        });

                    }}>
                    <div className="grid-2--child article__item center-hrz--col" key={article.articleID} style={{backgroundImage: `url(${article.banner})`, cursor: "pointer"}}>
                    <div className="article__item__bottom" style={{paddingTop: "0px"}}>
                      <div className="article__item__bottom--title" > 
                          <h1 className="deep-blue-text">{article.title}</h1>
                      </div>

                      <div className="article__item__bottom--author">     
                            <div>
                            <img src={article.authorDetails.photo} alt="" className="article__item--authorPic"/>     
                            </div>
                                  <div className="u-margin-bottom-small column" style={{justifyContent: "center"}}>
                                    <h3 className="white-text bigger-text" style={{textAlign: "left", justifyContent: "flex-start"}}>{article.authorDetails.name}</h3>
                                    <h3 className="white-text normal-text" style={{textAlign: "left", justifyContent: "flex-start"}}>{article.authorDetails.title}</h3>
                                </div>
                      </div>
                      <h4 className="white-text normal-text red-ish-text" style={{textAlign: "right", marginRight: "2rem"}}>{moment(article.createdAt.toDate()).calendar()}</h4>
                    </div>
                    </div>
                    </Link>
                    ): null) : <p>No data</p> : <Loading/>
                }
            </div>
           </div>

           
        <Footer/>
        </>
    )
}



const mapStateToProps = state=>{
    return {
      articles: state.firestore.ordered.allArticles,
    }
  }

  const mapDispatchToProps = dispatch=>{ //this will allow you to dispatch actions from anywhere in the compoonent
    return bindActionCreators(actionCreators, dispatch);
  }

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect(props=>[{collection: "allArticles"}])
)
(Read)
