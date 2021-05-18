import React, {useEffect, useState} from 'react'

const WeekPoll = () => {
    const [qObj, setQObj] = useState("");

    useEffect(()=>{
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
    }, [])

    
    return (
        <>
        {qObj !== "" ? (
            <div className="u-margin-top-big">
            <p className="center-text white-text normal-text">{qObj.data.question}</p>
            {qObj.data.options.map(question=>(
                <div className="center-hrz u-margin-bottom">
                   <button className="button" key={question.id} id={question.id}>{question.text}</button>
                </div>
            ))}
            </div>
        ): null}
        </>
    )
}

export default WeekPoll
