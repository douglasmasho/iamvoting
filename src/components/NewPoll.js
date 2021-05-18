import React, {useRef, useState} from 'react';
import {nanoid} from "nanoid";

const NewPoll = () => {
    const [options, setOptions] = useState([]);
    const addQuestion = ()=>{
        console.log("testing the API");
        async function testCreate (){
            const bodyObj = {
                question: "Do you have any issues or queries that you would want to be addressed by the political party you support",
                identifier: "custom_identifier",
                data: {
                    custom: "Poll Data"
                },
                options: [
                    {
                        text: "Yes",
                        data: {
                            custom: "yes"
                        }
                    },
                    {
                        text: "No",
                        data: {
                            custom: "no"
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
