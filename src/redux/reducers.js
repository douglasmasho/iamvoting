import {combineReducers} from "redux"; //this is the function to combine 
import {firestoreReducer} from "redux-firestore";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

//
const persistConfig = {
  key: "root",
  storage,
  whiteList: ["password"] 
}

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

const writersPassReducer = (state = false, action)=>{
  switch(action.type){
    case "ENTER_PASSWORD":
     return action.password === "123";
     default: return state
  }
}


const authReducer = (state=false, action)=>{
  switch(action.type){
    case "SET_AUTH": return action.status
    default: return state
  }
}




 const rootReducer = combineReducers({
    counter: counterReducer,
    isLogged: isLoggedReducer,
    members: membersReducer,
    joinError: joinErrorReducer,
    password: writersPassReducer,
    firestore: firestoreReducer,
    authStatus: authReducer
})



// export default rootReducer;

export default  persistReducer(persistConfig, rootReducer);