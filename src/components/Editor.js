import React, {useEffect, useRef, useState} from 'react';
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";
import ImageTool from '@editorjs/image';
import Quote from '@editorjs/quote';
import firebase from 'firebase/app';
import {connect} from "react-redux";
import {Route, Redirect, Link} from "react-router-dom";
import { useHistory } from "react-router-dom"
import Loading from './Loading';
// import {connect} from "react-redux";
// import * as actionCreators from "./redux/actions";
// import {bindActionCreators} from "redux";
//add caching with redux-persist


const Editor = (props) => {
    const editorRef = useRef(null);
    const [banner,setBanner] = useState("");
    const [title, setTitle] = useState("");
    const errorTextRef = useRef();
    const loadingContainerRef = useRef();
    let history = useHistory();

    const saveArticle = (draft)=>{
        if(banner !== "" && title !== ""){
            editorRef.current.save().then(output=>{
                var metadata = {
                    contentType: 'image/jpeg'
                };

                async function upload(){
                    try{
                        loadingContainerRef.current.style.display = "block";
                        const firestore = firebase.firestore();
                        //create folder and upload the article banner to storage
                        const uploadTask = await firebase.storage().ref("articles/" + props.match.params.articleID + "/" + "banner").put(banner, metadata);
                        console.log("Uploaded successfully!", uploadTask);
                        const bannerURL = await uploadTask.ref.getDownloadURL();
                        console.log(bannerURL);

                        const docSnapshot = await firebase.firestore().collection("fileLists").doc(props.match.params.articleID).get();
                        if(!docSnapshot.exists){
                            console.log("this thing does not exist")
                            const createFileList = await firebase.firestore().collection("fileLists").doc(props.match.params.articleID).set({
                                fileList: []
                            })
                        }
                        console.log("this thing exist")

                        const addToFileList = await firebase.firestore().collection("fileLists").doc(props.match.params.articleID).update({
                          fileList: firebase.firestore.FieldValue.arrayUnion("banner")
                        })

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
                                authorID: firebase.auth().currentUser.uid
                            },
                            articleID: props.match.params.articleID,
                        }
                         console.log(output);
                        if(!draft){
                            //upload the article object to firestore
                            console.log(articleObj);   

                            const articleObjUpload = await firestore.collection("articles").doc(props.match.params.articleID).set(articleObj);
                            console.log("article object upload successful");
                        }
                        //upload the article to firestore in the users articlesArr

                        //create the document if it does not exist yet
                        // const docSnapshots = await firestore.collection("userArticles").doc(firebase.auth().currentUser.uid).get();
                        // if(docSnapshots.exists){
                        const articleObjUpload2 = await firestore.collection("userArticles").doc(firebase.auth().currentUser.uid).update({
                                articles: firebase.firestore.FieldValue.arrayUnion(articleObj)
                        });

                        const articleUpload3 = await firestore.collection("allArticles").doc(props.match.params.articleID).set(articleObj);
                        // }else{
                        //     const documentCreation = await firestore.collection("userArticles").doc(firebase.auth().currentUser.uid).set({
                        //         articles: [articleObj]
                        //     })
                        // }
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
        }else{
            errorTextRef.current.style.display = "block";

            setTimeout(()=>{
                errorTextRef.current.style.display = "none";
            }, 2000)
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
                  image: {
                      class: ImageTool,

                      config: {
                        uploader: {
                                async uploadByFile(file) {
                                var metadata = {
                                    contentType: 'image/jpeg'
                                };
                                var uploadTask = await firebase.storage().ref("articles/" + props.match.params.articleID + "/" + file.name).put(file, metadata);
                                console.log("Uploaded successfully!", uploadTask);
                                const downloadURL = await uploadTask.ref.getDownloadURL();
                                console.log(downloadURL);
                                //add to the list
                                const docSnapshot = await firebase.firestore().collection("fileLists").doc(props.match.params.articleID).get();
                                if(!docSnapshot.exists){
                                    const createFileList = await firebase.firestore().collection("fileLists").doc(props.match.params.articleID).set({
                                        fileList: []
                                    })
                                }
                                const addToFileList = await firebase.firestore().collection("fileLists").doc(props.match.params.articleID).update({
                                  fileList: firebase.firestore.FieldValue.arrayUnion(file.name)
                                })

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

           <div class="u-margin-bottom">
            <h1 className="screen__header" style={{color: "black"}}>New Article</h1>
            <div className="redline redline--aboutus showAbove" style={{marginTop: 0}}></div>
          </div>
                    <div className="column u-margin-bottom-big">
                    <input type="text" className="input-textbox u-margin-bottom" placeholder="please enter the article title" onChange={handleTitleChange}/>
                    <p className="bigger-text u-margin-bottom-small">Article Banner</p>
                    <input type="file" id="banner" onChange={handleBannerChange}/>
                    </div>

                    <p className="bigger-text u-margin-bottom-small">Article Content</p>
                    <div id="editorjs">
                    </div>
                    <p className="red-text normal-text" ref={errorTextRef} style={{display: "none"}}>Please enter the article title and image</p>
                    <div className="center-hrz u-margin-top u-margin-bottom">
                    <button onClick={()=>{
                        saveArticle(false)
                    }} className="button">Publish Article</button>
                    <button onClick={()=>{
                        saveArticle(true)
                    }} className="button u-margin-left">Save as Draft</button>
                    </div>
                    <div style={{display: "none"}} ref={loadingContainerRef}>
                       <Loading/>
                    </div>
        </div>
    )
}

const mapStateToProps = state=>({ //is the state in the store ///will take the state from the store and put it as props in the component that is being connected
    auth: state.authStatus
  });
  
  export default connect(mapStateToProps)(Editor)
  
