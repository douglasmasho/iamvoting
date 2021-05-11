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
        if(props.currentArticlee){
            console.log(props.currentArticlee[0].blocks);
        }
    })
    return (
        <>
        <Navbar/>
        {
            props.currentArticlee && props.currentArticlee[0] ?   
        <div  className="singleArticle">
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
            <div className="singleArticle__content">
                    {
                        props.currentArticlee[0].blocks.blocks.map(block=>{
                            switch(block.type){
                                case "image": return (
                                    <div style={{width: "100%"}} className="u-margin-bottom-big">
                                        <div className="center-hrz" style={{width: "100%"}}>
                                          <img src={block.data.file.url} alt={block.data.caption.replace(/&nbsp;/g, '')} key={block.id} className="singleArticle__content__image"/>
                                        </div>
                                      <p className="center-text u-margin-top-small">{block.data.caption.replace(/&nbsp;/g, '')}</p>
                                    </div>
                                    )

                                case "header": 
                                       switch(block.data.level){
                                           case 1: return <h1>{block.data.text.replace(/&nbsp;/g, '')}</h1>
                                           case 2: return <h2>{block.data.text.replace(/&nbsp;/g, '')}</h2>
                                           case 3: return <h3>{block.data.text.replace(/&nbsp;/g, '')}</h3>
                                           case 4: return <h4>{block.data.text.replace(/&nbsp;/g, '')}</h4>
                                       }   
                                       break;
                                case "paragraph": return  <p className="singleArticle__content__paragraph u-margin-bottom">{block.data.text.replace(/&nbsp;/g, '')}</p>
                                case "list":
                                switch(block.data.style){
                                    case "ordered": return (<ol className="u-margin-bottom normal-text">
                                                            {block.data.items.map(item=> <li>{item.replace(/&nbsp;/g, '')}</li>)}
                                                          </ol>)
                                    case "unordered": return (<ul className="u-margin-bottom normal-text">
                                                             {block.data.items.map(item=> <li>{item.replace(/&nbsp;/g, '')}</li>)}
                                                            </ul>)                     
                                }    
                                break;
                                case "quote":
                                      return (<div className="center-hrz--col singleArticle__content__quote">
                                                 <p className="center-hrz--col singleArticle__content__quoteText">"<span>{block.data.text.replace(/&nbsp;/g, '')}</span>"</p>
                                                 <p className="center-hrz--col singleArticle__content__quoteAuthor">-{block.data.caption.replace(/&nbsp;/g, '')}</p>
                                                 </div>)             
                            }
                        })  
                    }    
            </div>
        </div> 
        : <Loading/>}
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