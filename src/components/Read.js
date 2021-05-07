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


const Read = (props) => {
    useEffect(()=>{
        if(props.articles){
            // console.log(props.articles[0].createdAt.toDate());
        }
    })
    return (
        <>
        <Navbar/>
            <div className="u-padding-top-larger articlesList__div">
            <div className="grid-2 grid u-margin-bottom-big">
                {
                    props.articles ? props.articles.length > 0 ? props.articles.map(obj=>obj).sort((a,b)=>b.createdAt.valueOf() - a.createdAt.valueOf()).map(article=> (
                    <div className="grid-2--child article__item center-hrz--col" key={article.articleID} style={{backgroundImage: `url(${article.banner})`}}>
                    <div className="article__item__bottom" style={{paddingTop: "0px"}}>
                      <div className="article__item__bottom--title" > 
                          <h1 className="deep-blue-text">{article.title}</h1>
                      </div>

                      <div className="article__item__bottom--author row">     
                              {/* <div  style={{backgroundImage: `url(${article.authorDetails.photo})`}}>
                              </div> */}
                              <img src={article.authorDetails.photo} alt="" className="article__item--authorPic"/>
                              <div>
                                  <div className="u-margin-bottom-small">
                                    <h3 className="white-text bigger-text" style={{textAlign: "left", justifyContent: "flex-start"}}>{article.authorDetails.name}</h3>
                                    <h3 className="white-text normal-text" style={{textAlign: "left", justifyContent: "flex-start"}}>{article.authorDetails.title}</h3>
                                  </div>
                              </div>
                          
                      </div>
                      <h4 className="white-text normal-text red-ish-text" style={{textAlign: "right", marginRight: "2rem"}}>{moment(article.createdAt.toDate()).calendar()}</h4>
                    </div>

                    </div>)) : <p>No data</p> : <Loading/>
                }
            </div>

           </div>
        <Footer/>
        </>
    )
}

const mapStateToProps = state=>{
    return {
      articles: state.firestore.ordered.allArticles
    }
  }


export default compose(
    connect(mapStateToProps),
    firestoreConnect(props=>[{collection: "allArticles"}])
)
(Read)
