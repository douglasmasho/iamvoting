

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
    return (dispatch, getState, {getFirebase, getFirestore})=>{ ///return a function
        //make async call to the database //add project to the database or request to the database.
        const firestore = getFirestore();

        //check if the email already exists, if it does, return an error, if it does not
        firestore.collection("newMembers").doc("memberObjects").get().then(resp=>{
            if(!resp.data().emailArray.some(el=> el === mObject.email)){
            //add the object to the mArray
                firestore.collection("newMembers").doc("memberObjects").update({
                    mArray: firestore.FieldValue.arrayUnion(mObject)
                }).then((resp)=>{
                //add 1 to the mNumber
                 return firestore.collection("newMembers").doc("memberObjects").update({
                      mNumber: firestore.FieldValue.increment(1)
                  })
                }).then(()=>{
                    return firestore.collection("newMembers").doc("memberObjects").update({
                        emailArray: firestore.FieldValue.arrayUnion(mObject.email)
                    })
                }
                ).then(()=>{
                    dispatch({
                        type: "JOIN_ERROR",
                        error: null
                    })
                }).catch((e)=>{
                    console.log(e)
                    dispatch({
                        type: "JOIN_ERROR",
                        error: e
                    })
                })
            }else{
                dispatch({
                    type: "JOIN_ERROR",
                    error: "your email addrress has been discovered in our records, you are already a member."
                })
            }
            
        })


    }
}

export const subscribe = (email)=>{
    return (dispatch, getState, {getFirebase, getFirestore})=>{
        const firestore = getFirestore();
        console.log(email);
        //get the email array for check
        firestore.collection("subList").doc("subList").get().then(resp=>{
            if(!resp.data().subList.some(e=> e === email)){
                firestore.collection("subList").doc("subList").update({
                    subList: firestore.FieldValue.arrayUnion(email)
                }).then(resp=>{
                    console.log("upload successsful")
                }).catch(e=>{
                    console.log(e);
                })
            }else{
                ///dishpatch an error message
                console.log("this email is already subscribed");
            }
        })

    }
}


export const setPassword = (password)=>{
    return {
        type: "ENTER_PASSWORD",
        password
    }
}

export const setAuthStatus = (status)=>{

    return (dispatch, getState, {getFirebase, getFirestore})=>{
        const firestore = getFirestore();
        const firebase = getFirebase();
    //check if true
    if(status){
        //check if the userArticles doc has been created and set it that way

        async function create(){
            try{
                const docSnapshots = await firestore.collection("userArticles").doc(firebase.auth().currentUser.uid).get();
                if(!docSnapshots.exists){
                    const documentCreation = await firestore.collection("userArticles").doc(firebase.auth().currentUser.uid).set({
                        articles: []
                    })              
                }
            }catch(e){
                console.log(e)
            }
        }

        create();
    }

        dispatch({
            type: "SET_AUTH",
            status
        }) 
    }



}

