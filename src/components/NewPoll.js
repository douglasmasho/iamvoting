import React, {useRef, useState, useEffect} from 'react';
import {nanoid} from "nanoid";
import firebase from 'firebase/app';
import { Redirect, Link} from "react-router-dom";
import {connect} from "react-redux";



const NewPoll = (props) => {
    const [options, setOptions] = useState([]);
    const {REACT_APP_POLLSAPI_KEY} = process.env;

    const addQuestion = ()=>{
        console.log("testing the API");
        async function testCreate (){
            const bodyObj = {
                question: "TEeeeeest Question",
                identifier: "custom_identifier",
                data: {
                    custom: "Poll Data"
                },
                options: [
                    {
                        text: "Completely agree",
                        data: {
                            custom: "Completely agree"
                        }
                    },
                    {
                        text: "Somewhat agree",
                        data: {
                            custom: "Somewhat agree"
                        }
                    },
                    {
                        text: "Neutral",
                        data: {
                            custom: "Neutral"
                        }
                    },
                    {
                        text: "Somewhat disagree",
                        data: {
                            custom: "Somewhat disagree"
                        }
                    },
                    {
                        text: "Completely disagree",
                        data: {
                            custom: "Completely disagree"
                        }
                    }
                ]
            }
            try{
               const responseJSON = await fetch("https://api.pollsapi.com/v1/create/poll", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                        "api-key": REACT_APP_POLLSAPI_KEY
                    },
                    body: JSON.stringify(bodyObj)
                })

                const response = await responseJSON.json();
                console.log(response)
                const firestore = firebase.firestore();

                //upload to firestore in the polls 
                firestore.collection("polls").doc(response.data.id).set(response);

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
