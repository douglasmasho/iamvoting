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
import Read from './Read';
import SingleArticle from './SingleArticle';
import WeekPoll from './WeekPoll';
import { slide as Menu } from 'react-burger-menu';

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
                    {/* <Intro/> */}
                    <WeekPoll/>
                    <Fade>
                    <Counters/>
                    </Fade>
                    <Socials/>
                    <Footer/>
                </>        
              )
            }}/>
            <Route path="/joinus" component={JoinUs}/>
            <Route path="/aboutus" component={AboutUs}/>
            <Route path="/terms" component={Terms}/>
            <Route path="/articleList" component={Read}/>
            <Route exact path="/read/:articleID" component={SingleArticle}/>
        </div>
        </>
    )
}

export default Home