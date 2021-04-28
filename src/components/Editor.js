import React, {useEffect, useRef} from 'react';
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";


const Editor = () => {
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
                    inlineToolbar: ["link"], ///what does it do?
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
