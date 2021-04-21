import React from 'react';
import * as actionCreators from "../redux/actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


const Dasboard = (props) => {

  if(!props.password)
  {
   return <Redirect to="/"/>
  }

    return (
        <div style={{height: "100vh"}}>
            Dashboard
        </div>
    )
}

const mapStateToProps = state=>({ //this is the state in the store ///this will take the state from the store and put it as props in the component that is being connected
    password: state.password
  });
  
  const mapDispatchToProps = dispatch=>{ //this will allow you to dispatch actions from anywhere in the compoonent
    return bindActionCreators(actionCreators, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(Dasboard);