import {combineReducers} from "redux"; //this is the function to combine 
import {firestoreReducer} from "redux-firestore";

//reducer 1, for the counter state
const counterReducer = (state = 0, action)=>{
    switch(action.type){
      case "INCREMENT": 
      //do something
      return state + action.number;
      case "DECREMENT":
        return state - action.number;
      default: return state
    };
  }

//reducer 2, for the isLogged state
const isLoggedReducer = (state=false, action)=>{
    switch(action.type){
        case "SIGN_IN":
            return !state
        default: return state
    }
}

const membersReducer = (state=[], action)=>{
  switch(action.type){
      case "ADD_MEMBER":
          return [...state, action.mObject];
      default: return state
  }
}

const joinErrorReducer = (state= null, action)=>{
  switch(action.type){
    case "JOIN_ERROR":
      return action.error
    default: return state;
  }
}



 const rootReducer = combineReducers({
    //nameOfState: nameOfReducer,
    counter: counterReducer,
    isLogged: isLoggedReducer,
    members: membersReducer,
    joinError: joinErrorReducer,
    firestore: firestoreReducer
})

export default rootReducer;
