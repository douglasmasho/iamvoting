import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "./redux/actions";
import {bindActionCreators} from "redux";
import {Route} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Loading from './components/Loading';

function App(props) {
  return (
    <div className="App">  
        <Home/>
        <Route path="/write/:action" component={Dashboard}/>
        <Route path="/loading" component={Loading}/>
    </div>
  );
}


const mapStateToProps = state=>({ //this is the state in the store ///this will take the state from the store and put it as props in the component that is being connected
  count: state.counter,
  isAuthed: state.isLogged
});

const mapDispatchToProps = dispatch=>{ //this will allow you to dispatch actions from anywhere in the compoonent
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
