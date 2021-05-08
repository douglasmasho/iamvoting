import React, {useEffect, useRef, useState} from 'react';
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";
import ImageTool from '@editorjs/image';
import Quote from '@editorjs/quote';
import firebase from 'firebase/app';
import {connect} from "react-redux";
import SimpleImage from '@editorjs/simple-image';
import {Route, Redirect, Link} from "react-router-dom";
import { useHistory } from "react-router-dom"
import Loading from './Loading';
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
// import {connect} from "react-redux";
// import * as actionCreators from "./redux/actions";
// import {bindActionCreators} from "redux";
//add caching with redux-persist


const EditorEdit = (props) => {
    const editorRef = useRef(null);
    const [banner,setBanner] = useState("");
    const [title, setTitle] = useState("");
    const errorTextRef = useRef();
    const loadingContainerRef = useRef();
    const [bannerChange, setBannerChange] = useState(false);
    const [titleChange, setTitleChange] = useState(false);
    const bannerRef = useRef();
    const titleRef = useRef();
    let history = useHistory();
    const inputFileRef = useRef();

    useEffect(()=>{
        if(props.article){
            setTitle(props.article[0].title);
            setBanner(props.article[0].banner);
        }
    },[props.article])


    const uploadFunc = (draft)=>{
        editorRef.current.save().then(output=>{
            var metadata = {
                contentType: 'image/jpeg'
            };

            async function upload(){
                try{
                    loadingContainerRef.current.style.display = "block";
                    const firestore = firebase.firestore();
                    //create folder and upload the article banner to storage
                    let bannerURL
                    if(typeof banner !== "string"){
                        const uploadTask = await firebase.storage().ref("articles/" + props.articleID + "/" + "banner").put(banner, metadata);
                        console.log("Uploaded successfully!", uploadTask);
                        bannerURL = await uploadTask.ref.getDownloadURL();
                        console.log(bannerURL);
                    }else{
                        bannerURL = banner
                    }

                                            //get the author's information
                                            const authorInfo = await firebase.firestore().collection("userArticles").doc(firebase.auth().currentUser.uid).get();
                                            const socials = authorInfo.data().socials;
                                            const authorTitle = authorInfo.data().title;

                    //create an object that will have the other data
                    const articleObj = {
                        title,
                        banner: bannerURL,
                        blocks: output,
                        createdAt: new Date(),
                        draft,
                        authorDetails: {
                            name: firebase.auth().currentUser.displayName,
                            photo: firebase.auth().currentUser.photoURL,
                            email: firebase.auth().currentUser.email,
                            authorID: firebase.auth().currentUser.uid,
                            socials,
                            title: authorTitle
                        },
                        articleID: props.articleID
                    }
                     console.log(output);
                    if(!draft){
                        //upload the article object to firestore
                        console.log(articleObj);   

                        const articleObjUpload = await firestore.collection("articles").doc(props.articleID).set(articleObj);
                        console.log("article object upload successful");
                    }
                    //upload the article to firestore in the users articlesArr

                    //create the document if it does not exist yet
                    const userDoc = await firestore.collection("userArticles").doc(firebase.auth().currentUser.uid).get();
                    //find the article with the article id of the edit
                    const articleToBeDeleted = userDoc.data().articles.find(obj=>obj.articleID === props.articleID);
                    console.log(articleToBeDeleted);
                    console.log(articleObj);
                    const articleDelete = await firestore.collection("userArticles").doc(firebase.auth().currentUser.uid).update({
                        articles: firebase.firestore.FieldValue.arrayRemove(articleToBeDeleted)
                    });
                    const articleObjUpload2 = await firestore.collection("userArticles").doc(firebase.auth().currentUser.uid).update({
                        articles: firebase.firestore.FieldValue.arrayUnion(articleObj)
                    });

                    const articleUpload3 = await firestore.collection("allArticles").doc(props.articleID).set(articleObj);
                    console.log("article object upload successful again");
                    history.push("/write/articles");
                }
                catch(e){
                    console.log(e)
                }

            }
            upload();
            // console.log(output);
            // console.log(banner.name);
            // console.log(title);
        })
    }
    const saveArticle = (draft)=>{
        if(inputFileRef.current){
            if(banner !== "" && title !== ""){
                uploadFunc(draft);
            }else{
                errorTextRef.current.style.display = "block";
                setTimeout(()=>{
                    errorTextRef.current.style.display = "none";
                }, 2000)
            }
        }else{
            uploadFunc(draft);
        }
        
    }

    const handleTitleChange = (e)=>{
        setTitle(e.target.value);
        console.log(e.target.value);

    }
    const handleBannerChange = (e)=>{
        setBanner(e.target.files[0]);
        console.log(e.target.files[0]);
    }
    

    useEffect(()=>{
          editorRef.current = new EditorJS({
            holderID: "editorjs", ////this is the default value
            data:  props.article[0].blocks,
            tools: {
                header: {
                    class: Header, //specify the class of the tool
                    inlineToolbar: ["link"], ///what does it do?,
                    config: {
                        placeholder: 'Enter a header',
                        levels: [1,2, 3, 4],
                        defaultLevel: 3
                      }
                },
                list: {
                    class: List,
                    inlineToolbar: ["link", "bold"]
                },

                embed: {
                    class: Embed,
                    config: {
                      services: {
                        youtube: true,
                        coub: true
                      }
                    }
                  },
                  quote: {
                    class: Quote,
                    inlineToolbar: true,
                    shortcut: 'CMD+SHIFT+O',
                    config: {
                      quotePlaceholder: 'Enter a quote',
                      captionPlaceholder: 'Quote\'s author',
                    },
                  },
                  previewImage:SimpleImage,
                  image: {
                      class: ImageTool,
                      config: {
                        uploader: {
                                async uploadByFile(file) {
                                var metadata = {
                                    contentType: 'image/jpeg'
                                };
                                var uploadTask = await firebase.storage().ref("articles/" + props.articleID + "/" + file.name).put(file, metadata);
                                console.log("Uploaded successfully!", uploadTask);
                                const downloadURL = await uploadTask.ref.getDownloadURL();
                                console.log(downloadURL);
                                return {
                                    success: 1,
                                    file: {
                                        url: downloadURL
                                    }
                                }
                            }

                        }
                    }

                  }
            }//specify the different tools you want in the editor
        })
    }, [])

    if(!props.auth && !firebase.auth().currentUser){
        return  <Redirect to="/write/account"/>
    }
    return (
        <div className="screen screen--white">
           <div className="u-margin-bottom">
            <h1 className="screen__header" style={{color: "black"}}>Edit Article</h1>
            <div className="redline redline--aboutus showAbove" style={{marginTop: 0}}></div>
          </div>

                    <div className="column u-margin-bottom-big">
                    <h1 ref={titleRef} className="header-text red-ish-text">{props.article[0].title}</h1>
                    {titleChange ? <input type="text" className="input-textbox u-margin-bottom" placeholder="please enter the article title" onChange={handleTitleChange} /> : 

                    <div className="u-margin-bottom">
                    <button className="button" onClick={()=>{
                        setTitleChange(true);
                        titleRef.current.style.display = "none";
                    }}>Change Title</button>
                    </div>
                    }  
                    <p className="bigger-text u-margin-bottom-small">Article Banner</p>
                    <img src={props.article[0].banner} alt="" ref={bannerRef}/>
                    {bannerChange ? <input type="file" id="banner" onChange={handleBannerChange}  ref={inputFileRef}/> : <button className="button" onClick={()=>{
                        setBannerChange(true);
                        bannerRef.current.style.display = "none";
                    }}>Change banner</button>}
                    
                    </div>

                    <p className="bigger-text u-margin-bottom-small">Article Content</p>
                    <div id="editorjs">
                    </div>
                    <div className="center-hrz u-margin-top u-margin-bottom">
                    <button onClick={()=>{
                        saveArticle(false)
                    }} className="button">Publish Article</button>
                    <button onClick={()=>{
                        saveArticle(true)
                    }} className="button u-margin-left">Save as Draft</button>
                    </div>
                    <p className="red-text" ref={errorTextRef} style={{display: "none"}}>Please enter the article title and image</p>
                    <div style={{display: "none"}} ref={loadingContainerRef}>
                       <Loading/>
                    </div>
        </div>
    )
}

const mapStateToProps = state=>({ //is the state in the store ///will take the state from the store and put it as props in the component that is being connected
    auth: state.authStatus,
  });

  export default compose(
      connect(mapStateToProps))
      (EditorEdit)
  
