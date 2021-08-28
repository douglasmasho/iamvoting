import React from 'react';
import { Controls, PlayState, Timeline, Tween } from 'react-gsap';
import BackgroundSlideshow from 'react-background-slideshow';

import Image1 from "../assets/seebg.png";
import Image2 from "../assets/seebg2.png";


const Hero = () => {
    return (
        <div className="hero">
          <div className="hero__title--container">
            <div className="hero__title">          
                <h1>
                <Timeline target={<span className="showAbove">SEE</span>}>
                      <Tween to={{ y: "0", x: 0, opacity: 1, scale: 1}} duration={0.6} from={{ opacity: 0, y: "100%"}}/>
                  </Timeline>       
                </h1>
                
                <Timeline target={
                  <h1 className="showAbove">     
                    <Timeline target={<span className="showAbove">Namibia</span>}>
                          <Tween to={{ y: "0", x: 0, opacity: 1, scale: 1}} delay={0.5} duration={0.6} from={{ opacity: 0, y: "100%"}}/>
                      </Timeline>
                  </h1>
                }>
                  <Tween to={{ width: "95%", padding: "0.5rem 1rem" }} delay={-0.5} duration={0.6} from={{ width: "0px", padding: 0}}/>
              </Timeline>


                <Timeline target={ <div className="redline showAbove"></div>}>
                      <Tween to={{ opacity: 1, width: "200px"}} delay={0.5} duration={0.6} from={{ opacity: 0, width: 0}}/>
                  </Timeline>

                  <Timeline target={ <p className="showAbove deep-blue-text moto">Empowering Society</p>}>
                  <Tween to={{ y: "0", x: 0, opacity: 1, scale: 1}} delay={0.5} duration={0.6} from={{ opacity: 0, y: "100%"}}/>
                  </Timeline>
                  
                  <div className="hero__overlay">
                  </div>
                  <div className="bgDesktop">
                    <BackgroundSlideshow images={[ Image1, Image2]}  animationDelay= "2000"/>
                  </div>
              </div>
          </div>
        </div>
    )
}

export default Hero
