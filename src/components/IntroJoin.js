import React from 'react';
import { Controls, PlayState, Timeline, Tween } from 'react-gsap';
import BackgroundSlideshow from 'react-background-slideshow';
import Image1 from "../assets/bgs/ps1.jpg";
import Image2 from "../assets/bgs/ps2.jpg";
import Image3 from "../assets/bgs/ps3.jpg";


import {Link} from "react-router-dom"

const IntroJoin = () => {
    return (
        <div className="hero">
          <div className="hero__title--container">
            <div className="hero__title-2">          
                <h1>
                <Timeline target={<span className="showAbove white-text hero-text">Join</span>}>
                      <Tween to={{ y: "0", x: 0, opacity: 1, scale: 1}} duration={0.6} from={{ opacity: 0, y: "100%"}}/>
                  </Timeline>       
                </h1>
                
                <Timeline target={
                  <h1 className="showAbove">     
                    <Timeline target={<span className="showAbove white-text hero-text">Us</span>}>
                          <Tween to={{ y: "0", x: 0, opacity: 1, scale: 1}} delay={0.5} duration={0.6} from={{ opacity: 0, y: "90%"}}/>
                      </Timeline>
                  </h1>
                }>
                  <Tween to={{ width: "", padding: "0.5rem 1rem" }} delay={-0.5} duration={0.6} from={{ width: "0px", padding: 0}}/>
              </Timeline>
              <div className="columnWhenSmall">
              <p className="showAbove u-margin-top-small normal-text white-text forBig u-margin-bottom" style={{width: "50%"}}>Become a volunteer for SEE Namibia.</p><br /><br />
                <Link to="/terms" className="showAbove"><button className="button" style={{borderRadius: "20px"}}><p className="deep-blue-text center-text bigger-text">View Policies and Guidelines</p></button></Link>
              </div>

                  <div className="hero__overlay-2">
                  </div>
                  <div className="bgDesktop">
                    <BackgroundSlideshow images={[ Image1, Image2, Image3]}  animationDelay= "2000"/>
                  </div>
              </div>
          </div>
        </div>
    )
}

export default IntroJoin
