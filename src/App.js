import React from 'react';
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import ReactPlayer from 'react-player';
import Intro from "./components/Intro";
import Socials from "./components/Socials";
import {connect} from "react-redux";
import * as actionCreators from "./redux/actions";
import {bindActionCreators} from "redux";
import Counters from './components/Counters';
import {Route} from "react-router-dom";
import JoinUs from "./components/JoinUs"
function App(props) {

  return (
    <div className="App">
       
        <Navbar/>
        <Route exact path="/" render={(routeArgs)=>{
          return (
            <>
              <Hero/>
              <Intro/>
              <Counters/>
               {/* put the counters here */}
              <Socials/>
            </>        
          )
        }}/>

        <Route path="/joinus" component={JoinUs}/>
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
