import React, {useEffect} from 'react'
import {Route, Redirect, Link} from "react-router-dom";
import firebase from 'firebase/app';
import {connect} from "react-redux";
import Editor from "./Editor";
import {nanoid} from "nanoid";
import Plus from "../assets/plus.svg";
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import JustAnimation from './JustAnimation';
import PencilBlack from "../assets/pencilblack.svg";
import Trash from "../assets/trash.svg";
const Articles = (props) => {
  
  useEffect(()=>{
    console.log(props.articles)
    // console.log(props.articles[0])
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

            <h2 className="header-text red-ish-text center-text u-margin-top">Drafts</h2>

            <div className="grid-2 grid u-margin-bottom-big">
                <div className="grid-2--child article__item center-hrz--col center-vert">
                    <Link to={link}><img src={Plus} alt="" className="article__plus"/></Link> 
                    <h3>Add article</h3>   
                  </div>

                  {
                     props.articles ? props.articles[0].articles.map(obj=>obj).sort((a,b)=>b.createdAt.valueOf() - a.createdAt.valueOf()).map(article=> article.draft ? (
                      <div className="grid-2--child article__item center-hrz--col" key={article.articleID} style={{backgroundImage: `url(${article.banner})`}}> 
                      <div className="article__item__bottom">
                        <div>
                            <h1>{article.title}</h1>
                            <div>
                              <Link to={`/write/articles/edit/${article.articleID}`} className="button small-text article__button" title="edit article">
                              <img src={PencilBlack} alt=""/>
                                </Link>
                             <button className="button small-text article__button" title="delete article"><img src={Trash} alt=""/></button>
                            </div>
                        </div>
                      </div>
                      </div>  
                    ) : null ) : <JustAnimation/>  /* loading animation*/
                  } 
            </div> 

              <h2 className="header-text red-ish-text center-text u-margin-top-big">Published</h2>
              <div className="grid-2 grid "> 
                  {
                    props.articles ? props.articles[0].articles.map(obj=>obj).sort((a,b)=>b.createdAt.valueOf() - a.createdAt.valueOf()).map(article=> !article.draft ? (
                      <div className="grid-2--child article__item center-hrz--col" key={article.articleID} style={{backgroundImage: `url(${article.banner})`}}> 
                      <div className="article__item__bottom">
                        <div >
                            <h1>{article.title}</h1>
                            <div>
                             <Link to={`/write/articles/edit/${article.articleID}`} className="button small-text article__button" title="edit article">
                               <img src={PencilBlack} alt=""/>
                              </Link>
                             <button className="button small-text article__button" title="delete article"><img src={Trash} alt=""/></button>
                            </div>

                        </div>
                      </div>
                      </div>  
                    ) : null ) : <JustAnimation/>  /* loading animation*/
                  }              
              </div>  

     
        </div>
    )
}

const mapStateToProps = state=>{
  console.log(state.firestore.ordered.userArticles)
  return {
    auth: state.authStatus,
    articles: state.firestore.ordered.userArticles
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props=>[{collection: "userArticles", doc: props.uid}])
)(Articles)
