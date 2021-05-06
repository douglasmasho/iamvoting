import React, {useRef} from 'react';
import Fade from 'react-reveal/Fade';
import ScrollToTop from "./ScrollToTop";
import {Route} from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import Hero from "./Hero";
import Intro from "./Intro";
import Counters from './Counters';
import Socials from "./Socials";
import JoinUs from "./JoinUs";
import AboutUs from "./AboutUs";
import Terms from './Terms';

// import Footer from './components/Footer';

const Home = () => {
    const scrollDivRef = useRef();


    const scrollToTop = ()=>{
      scrollDivRef.current.scrollTo(0,0);
      console.log(document.querySelector(".scrollDiv"));
      document.querySelector(".scrollDiv").scrollTo(0,0);
      window.scrollTo(0,0);
    }
    return (
        <>
        <ScrollToTop scrollToTop={scrollToTop}/>     
        <div className="scrollDiv" ref={scrollDivRef}>
          <Route exact path="/" render={()=>{
              return (
                <>
                    <Navbar/>
                    <Hero/>
                    <Intro/>
                    <Fade>
                    <Counters/>
                    </Fade>
                    {/* put the counters here */}
                    <Socials/>
                    <Footer/>
                </>        
              )
            }}/>
            <Route path="/joinus" component={JoinUs}/>
            <Route path="/aboutus" component={AboutUs}/>
            <Route path="/terms" component={Terms}/>
        </div>
        </>
    )
}

export default Home
