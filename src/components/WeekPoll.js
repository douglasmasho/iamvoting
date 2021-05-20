import React, {useEffect, useState, useRef} from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import * as actionCreators from "../redux/actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

const WeekPoll = (props) => {
    const [qObj, setQObj] = useState("");
    const [option, setOption] = useState("");

    const   uiConfig = {
        signInFlow: "popup",
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          // firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
          signInSuccess: () => false
        }
      }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("Cast the vote", option);

        async function castVote(){
            const bodyObj = {
                poll_id: qObj.data.id,
                option_id: option,
                identifier: `${qObj.data.id}-${firebase.auth().currentUser.uid}`
            }
            console.log("casting vote", bodyObj)
            try{
                const responseJSON = await fetch("https://api.pollsapi.com/v1/create/vote", {
                    method: "POST",
                    headers:{
                        "Content-type": "application/json",
                        "api-key": "H0YSMRWP88M4M6GM9RPMFDMN9GRN"
                    },
                    body: JSON.stringify(bodyObj)
                })
                const response = await responseJSON.json();
                console.log(response);
                }catch(e){
                    console.log(e);
                }
        }

        castVote();
    }

    const handleChange = (e)=>{
        // console.log(e.target.checked);
        if(e.target.checked){
            setOption(e.target.id);
            console.log(option);
        }
    }

    const fetchVotes = ()=>{
        async function getVotes(){
            try{
                const responseJSON = await fetch(`https://api.pollsapi.com/v1/get/poll/${qObj.data.id}`, {
                    method: "GET",
                    headers: {
                        "api-key": "H0YSMRWP88M4M6GM9RPMFDMN9GRN"                          
                    }
                })  
                const response = await responseJSON.json();
                console.log(response)
            }catch(e){
                console.log(e)
            }
        }
        getVotes();
    }

    useEffect(()=>{
        console.log("requesting")
        const pollID = "60a3fd69ac99c70010183621";
        async function getPoll() {
            try{
                const responseJson = await fetch(`https://api.pollsapi.com/v1/get/poll/${pollID}`, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json",
                        "api-key": "H0YSMRWP88M4M6GM9RPMFDMN9GRN"
                    }
                })
                const response = await responseJson.json();
                console.log(response);
                setQObj(response)
            }catch(e){
                console.log(e)
            }
        }
        getPoll();

        firebase.auth().onAuthStateChanged(user=>{
            console.log(user);
            props.setAuthStatus(!!user)
          })
    }, [])

    
    return (
        <>

        { props.auth && firebase.auth().currentUser ?
        qObj !== "" ? (
            <div className="u-margin-top-big pollSection">
            <span>Weekly Poll</span>
            <p className="header-text red-ish-text u-margin-bottom center-text">{qObj.data.question}</p>
            <div className="center-hrz">
                <div className="pollSection__div">
                    <form onSubmit={handleSubmit}>
                        {qObj.data.options.map(option=>(
                            <div className="u-margin-bottom" key={option.id}>
                                <div className="center-hrz">
                                    <input type="radio" name="pollOption" className="radio"  id={option.id} style={{display: "inline-block"}} required onChange={handleChange}/>
                                    <label htmlFor={option.id} className="radio-label pollSection__label" tabIndex="2" >{option.text}</label>
                                    {/* <div style={{display: "inline-block"}}>
                                        <p>{option.text}</p>
                                    </div> */}
                                </div>
                            </div>
                        ))}
                    <div className="center-hrz">
                           <button type="submit" className="button">Vote</button>
                      </div>
                    </form>
                </div>
            </div>
            <div className="center-hrz--col u-margin-top normal-text">
              {/* <p>uid: {firebase.auth().currentUser.uid}</p> */}
             <button className="button " onClick={()=>firebase.auth().signOut()}>Sign out</button>
            </div>
            </div>
        ) : null 
        : 
        <div style={{padding: "5rem", backgroundColor: 'white'}} className="u-margin-top">
            <p className="center-text normal-text">To prevent Duplicate votes, please sign in to vote on this week's poll</p>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
        }


        <button onClick={fetchVotes}>Test</button>
        </>
    )
}


const mapStateToProps = state=>({ //is the state in the store ///will take the state from the store and put it as props in the component that is being connected
    auth: state.authStatus
  });
  
  const mapDispatchToProps = dispatch=>{ //will allow you to dispatch actions from anywhere in the compoonent
    return bindActionCreators(actionCreators, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(WeekPoll)

//if they exist, get all the votes with a specific uid ${qObj.data.id}-${firebase.auth().currentUser.uid}
 //delete/remove them
  //cast the vote
   //remove the poll screen and show the chart using chart js
    //done
