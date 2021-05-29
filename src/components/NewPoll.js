import React, {useRef, useState, useEffect} from 'react';
import {nanoid} from "nanoid";
import firebase from 'firebase/app';
import { Redirect, Link} from "react-router-dom";
import {connect} from "react-redux";



const NewPoll = (props) => {
    const [options, setOptions] = useState([]);
    const addQuestion = ()=>{
        console.log("testing the API");
        async function testCreate (){
            const bodyObj = {
                question: "How do you describe yourself as?",
                identifier: "custom_identifier",
                data: {
                    custom: "Poll Data"
                },
                options: [
                    {
                        text: "Conservative",
                        data: {
                            custom: "conservative"
                        }
                    },
                    {
                        text: "Liberal",
                        data: {
                            custom: "liberal"
                        }
                    },
                    {
                        text: "Both",
                        data: {
                            custom: "both"
                        }
                    },
                    {
                        text: "Something Else",
                        data: {
                            custom: "something-else"
                        }
                    },
                    {
                        text: "Don't Know",
                        data: {
                            custom: "dont-know"
                        }
                    }
                ]
            }
            try{
               const responseJSON = await fetch("https://api.pollsapi.com/v1/create/poll", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                        "api-key": "H0YSMRWP88M4M6GM9RPMFDMN9GRN"
                    },
                    body: JSON.stringify(bodyObj)
                })

                const response = await responseJSON.json();
                console.log(response);

            }catch(e){
                console.log(e)
            }
        }
        testCreate();
    }

    // useEffect(()=>{
    //     console.log(firebase.auth().currentUser.uid);
    // })

    // if(!props.auth && !firebase.auth().currentUser){
    //     return <Redirect to="/write/account"/>
    //   }

    return (
        <>

       {
           firebase.auth().currentUser && (firebase.auth().currentUser.uid !== "kbE2qHKewyP9ihFKNNvcUgHWkGA3") ? <Redirect to="/write/account"/> :         
           <div className="screen">  
              <button onClick={addQuestion}>Add Poll</button>
           </div>
       }
       </>
        
    )
}


const mapStateToProps = state=>{
    console.log(state.firestore.ordered.userArticles)
    return {
      auth: state.authStatus,
      articles: state.firestore.ordered.userArticles
    }
  }

export default connect(mapStateToProps, null)(NewPoll)
