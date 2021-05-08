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

            <div className="center-hrz">
            <h1 className="aboutus__intro-title">Articles</h1>
            </div>    
                <div className="center-hrz u-margin-bottom-small">
                <div className="redline redline--aboutus showAbove" style={{marginTop: 0}}></div>
            </div>
            
            <div className="grid-2 grid u-margin-bottom-big">
                {
                    props.articles ? props.articles.length > 0 ? props.articles.map(obj=>obj).sort((a,b)=>b.createdAt.valueOf() - a.createdAt.valueOf()).map(article=> !article.draft ? (   
                    <Link to={`/read/${article.articleID}`} onClick={()=>{
                        props.setArticle(article)
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
