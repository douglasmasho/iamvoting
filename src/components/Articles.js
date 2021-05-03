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

  const deleteArticle =(articleID)=>{
    //delete all traces of this article, including images
    const firestore = firebase.firestore();
      //get the article object
    const articleObj = props.articles[0].articles.find(obj=> obj.articleID === articleID)
    console.log(articleID);
    console.log();
    async function deleteFunc(){
      try{
                //delete doc from the articles collection
        const deletion = await firestore.collection("allArticles").doc(articleID).delete();
        console.log(deletion);
        //delete the object from the userArticles Collection in the uid document
        const deletion2 = await firestore.collection("userArticles").doc(firebase.auth().currentUser.uid).update({
        articles: firebase.firestore.FieldValue.arrayRemove(articleObj)
      })
      console.log(deletion2);
      //delete all the pictures associated with the article to be deleted
      //first get the filesList
      const filesList = await firestore.collection("fileLists").doc(articleID).get();
      filesList.data().fileList.forEach(fileName=>{
        firebase.storage().ref(`articles/${articleID}/${fileName}`).delete().then(resp=>{
          console.log(resp);
        });
      })
      //now delete the filesList

      const filesListDelete = await firestore.collection("fileLists").doc(articleID).delete();
      console.log(filesListDelete);
      }catch(e){
        console.log(e)
      }
    }

    deleteFunc();



    
  }

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
                             <button className="button small-text article__button" title="delete article"><img src={Trash} alt="" onClick={()=>{
                               deleteArticle(article.articleID);
                             }}/></button>
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
                             <button className="button small-text article__button" title="delete article"><img src={Trash} alt="" onClick={()=>{
                               deleteArticle(article.articleID);
                             }}/></button>
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
