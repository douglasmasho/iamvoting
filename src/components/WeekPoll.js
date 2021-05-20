import React, {useEffect, useState} from 'react'

const WeekPoll = () => {
    const [qObj, setQObj] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("Cast the vote")
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
    }, [])

    
    return (
        <>
        {qObj !== "" ? (
            <div className="u-margin-top-big pollSection">
            <span>Weekly Poll</span>
            <p className="header-text red-ish-text u-margin-bottom center-text">{qObj.data.question}</p>
            <div className="center-hrz">
                <div className="pollSection__div">
                    <form onSubmit={handleSubmit}>
                        {qObj.data.options.map(question=>(
                            <div className="u-margin-bottom" key={question.id}>
                                <div className="center-hrz">
                                    <input type="radio" name="pollOption" className="radio"  id={question.id} style={{display: "inline-block"}} required/>
                                    <label htmlFor={question.id} className="radio-label pollSection__label" tabIndex="2" >{question.text}</label>
                                    {/* <div style={{display: "inline-block"}}>
                                        <p>{question.text}</p>
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

            
            </div>
        ): null}
        </>
    )
}

export default WeekPoll
