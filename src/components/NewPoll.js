import React, {useRef, useState} from 'react';
import {nanoid} from "nanoid";

const NewPoll = () => {
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
    return (
        <div className="screen">
            
            <button onClick={addQuestion}>Add Poll</button>
      </div>
        
    )
}

export default NewPoll
