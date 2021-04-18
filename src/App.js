import React, {useRef} from 'react';
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
import Footer from './components/Footer';
import Fade from 'react-reveal/Fade';
import ScrollToTop from "./components/ScrollToTop";
import AboutUs from "./components/AboutUs";

function App(props) {
  const scrollDivRef = useRef();


  const scrollToTop = ()=>{
    scrollDivRef.current.scrollTo(0,0);
    console.log(document.querySelector(".scrollDiv"));
    document.querySelector(".scrollDiv").scrollTo(0,0);
    window.scrollTo(0,0);
  }
  return (
    <div className="App">  
    <ScrollToTop scrollToTop={scrollToTop}/>   
        <Navbar/>
          <div className="scrollDiv" ref={scrollDivRef}>
            <Route exact path="/" render={(routeArgs)=>{
              return (
                <>
                  <Hero/>
                  <Intro/>
                  <Fade>
                  <Counters/>
                  </Fade>
                  {/* put the counters here */}
                  <Socials/>
                </>        
              )
            }}/>
            <Route path="/joinus" component={JoinUs}/>
            <Route path="/aboutus" component={AboutUs}/>
          </div>
           {/* <button onClick={scrollToTop}>scroll</button> */}
        <Footer/>
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
