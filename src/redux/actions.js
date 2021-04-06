export const increment = ()=>{
    ///the dispatch is halted, so we can fetch data and use that when we dispatch  
    return {
        type: "INCREMENT",
        number: 1,
    }
}

export const decrement = ()=>{
    return {
        type: "DECREMENT",
        number: 1,
    }
}

export const newMember = (mObject)=>{
    console.log(mObject)
    return (dispatch, getState)=>{
        //make async call to the database //add project to the database or request to the database.
        dispatch({
            type: "ADD_MEMBER",
            mObject
        })
    }
}