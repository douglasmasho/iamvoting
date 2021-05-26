import React, {useEffect, useState, useRef} from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import * as actionCreators from "../redux/actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import { Doughnut } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';

import JustAnimation from './JustAnimation';




const WeekPoll = (props) => {
    const colorsArr = ['red','blue', 'yellow', 'green', 'black', 'orange', 'cyan', 'fuschia', 'violet', 'pink'];
    // const [props.pollObj, setprops.pollObj] = useState("");
    const [option, setOption] = useState("");
    const [pollData, setPollData] = useState("");
    const pollScreenRef = useRef();
    const pollResultsRef = useRef();
    const loadingDivRef = useRef()


    const data = {
        labels: [
            'Red',
            'Blue',
            'Yellow',
            'Cyan'
          ],
          datasets: [{
            label: 'My First Dataset',
            data: [20, 20, 20,20],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'cyan'
            ],
            hoverOffset: 4
          }]
    }

    const uiConfig = {
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
        pollScreenRef.current.style.display = "none";
        // pollResultsRef.current.style.display = "none";
        loadingDivRef.current.style.display = "block";
        async function castVote(){
            //this function, addVotw will add vote only after the other votes are deleted
            async function addVote(){
                console.log("adding vote")
                const bodyObj = {
                    poll_id: props.pollObj.data.id,
                    option_id: option,
                    identifier: `${props.pollObj.data.id}-${firebase.auth().currentUser.uid}`
                }       
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
                    fetchVotes();
                }catch(e){

                }
            }
            try{
                console.log("running the delete vote function");
                const identifier = `${props.pollObj.data.id}-${firebase.auth().currentUser.uid}`;
                
                const responseJSON2 = await fetch(`https://api.pollsapi.com/v1/get/votes-with-identifier/${identifier}?offset=0&limit=25`, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json",
                        "api-key": "H0YSMRWP88M4M6GM9RPMFDMN9GRN"  
                    }
                })
                const response2 = await responseJSON2.json();
                console.log(response2.data.docs);   
                    response2.data.docs.forEach((doc)=>{
                        //creeate the new body
                        const bodyObj2 = {
                            vote_id: doc.id
                        }
                        //remove each vote
                        fetch("https://api.pollsapi.com/v1/remove/vote", {
                            method: "POST",
                            headers: {
                                "Content-type": "application/json",
                                "api-key": "H0YSMRWP88M4M6GM9RPMFDMN9GRN"   
                            },
                            body: JSON.stringify(bodyObj2)
                        }).then(resp=>{
                            resp.json().then(resp=>{
                                console.log(resp);
                            })
                        })
                    })
                    addVote();
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
        //show the loading screen, and make everyhting go away
        async function getVotes(){
            try{
                const responseJSON = await fetch(`https://api.pollsapi.com/v1/get/poll/${props.pollObj.data.id}`, {
                    method: "GET",
                    headers: {
                        "api-key": "H0YSMRWP88M4M6GM9RPMFDMN9GRN"                          
                    }
                })  
                const response = await responseJSON.json();
                console.log(response);

                //set the pollData Object
                //create an obj

                const dataObj = {
                    labels: response.data.options.map(option=> option.text),
                    datasets: [{
                        label: "Options",
                        data: response.data.options.map(option=> option.votes_count),
                        backgroundColor: colorsArr.slice(0, response.data.options.length),
                        hoverOffset: 4
                    }]
                }

                //set the poll data
                //give the poll div a display of block
                setPollData(dataObj);
                pollScreenRef.current.style.display = "none";
                pollResultsRef.current.style.display = "block";
                loadingDivRef.current.style.display = "none";
            }catch(e){
                console.log(e)
            }
        }
        getVotes();
    }

    const voteAgain = ()=>{
        pollScreenRef.current.style.display = "block";
        pollResultsRef.current.style.display =  "none";
    }
    useEffect(()=>{
        console.log(props.pollObj);
    })

    useEffect(()=>{
        ///every month, change the create_at check, as well as the the pollID;
        const pollID = "60a401fc37e4f400101e4a84";
        console.log(props.pollObj.data.id);
        if(props.pollObj === {} || props.pollObj.data.id !==  pollID){
            console.log("requesting")
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
                props.setPollObj(response);
            }catch(e){
                console.log(e)
            }
        }
        getPoll();

        }
        firebase.auth().onAuthStateChanged(user=>{
            console.log(user);
            props.setAuthStatus(!!user)
          })
    }, [])

    
    return (
        <>
        <div>
        { props.auth ?
         props.pollObj !== "" ? (
            <div className="u-margin-top-big pollSection">
                <span>Weekly Poll</span>

                <div ref={pollScreenRef}>
                    <p className="header-text red-ish-text u-margin-bottom center-text">{props.pollObj.data.question}</p>
                    <div className="center-hrz">
                        <div className="pollSection__div">
                            <form onSubmit={handleSubmit}>
                                {props.pollObj.data.options.map(option=>(
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

                {
                    pollData !== "" ?
                    <div ref={pollResultsRef}>
                        <p className="header-text red-ish-text u-margin-bottom center-text">Results</p>
                        <Doughnut data={pollData} width={100}/>
                        <div className="center-hrz u-margin-top">
                           <button className="button" onClick={voteAgain}>Vote Again</button>
                        </div>
                    </div> : null
                }

                <div ref={loadingDivRef} style={{display: "none"}}>
                  <p className="center-text red-ish-text normal-text">Fetching results</p>
                  <JustAnimation/>
                </div>
            </div>
        ) : null 
        : 
        <div style={{padding: "5rem", backgroundColor: 'white'}} className="u-margin-top">
            <p className="center-text normal-text">To prevent Duplicate votes, please sign in to vote on this week's poll</p>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
        }      
        </div>

        <button onClick={fetchVotes}>Test</button>
        </>
    )
}


const mapStateToProps = state=>({ //is the state in the store ///will take the state from the store and put it as props in the component that is being connected
    auth: state.authStatus,
    pollObj: state.pollObj
  });
  
  const mapDispatchToProps = dispatch=>{ //will allow you to dispatch actions from anywhere in the compoonent
    return bindActionCreators(actionCreators, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(WeekPoll)

//if they exist, get all the votes with a specific custom identifier ${props.pollObj.data.id}-${firebase.auth().currentUser.uid}
 //delete/remove them
  //cast the vote
   //remove the poll screen and show the chart using chart js
    //done



//show the results graph
   //collect total votes
   //get the data(how many options does an option have?) on all the options
   //do the chart thing......find out how to use chart js in react


//final adjustments
   //the poll screen must disappear after voting, but put a button to vote again, if you want to vote again, the Doughnut must disappear
   //the pue must only show after a vote, that means you must be authenticated to see the results of the poll
