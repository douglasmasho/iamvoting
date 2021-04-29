import React, {useEffect, useRef} from 'react';
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";
import ImageTool from '@editorjs/image';
import Quote from '@editorjs/quote';
import firebase from 'firebase/app';


const Editor = (props) => {
    const editorRef = useRef(null);

    const saveArticle = ()=>{
        editorRef.current.save().then(output=>{
            console.log(output);
        })
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
                        levels: [2, 3, 4],
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
                            //  uploadByFile : function(file){
                            //      //upload image to firebase
                            //     firebase.storage().ref("test/" + file.name).put(file, {
                            //         contentType: 'image/jpeg'  
                            //     }).then(uploadTask=>{
                            //         //get the downloadURL from firebase
                            //         uploadTask.ref.getDownloadURL().then(url=>{
                            //             console.log(url);
                            //             return {
                            //                 success: 1,
                            //                 file: {
                            //                   url : url
                            //                 }
                            //             }
                            //         })
                            //     }).catch(e=>{
                            //         console.log(e)
                            //     })
                            // }


                                async uploadByFile(file) {
                                var metadata = {
                                    contentType: 'image/jpeg'
                                };

                                var uploadTask = await firebase.storage().ref("articles/" + props.match.params.articleID + "/" + file.name).put(file, metadata);
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
    return (
        <div className="screen screen--white">
            <h1>Your article</h1>
            <div id="editorjs">
            </div>
            <button onClick={saveArticle}>Save article</button>

        </div>
    )
}

export default Editor
