import React from 'react';
import { Controls, PlayState, Timeline, Tween } from 'react-gsap';
import BackgroundSlideshow from 'react-background-slideshow';

import Image1 from "../assets/seebg.png";
import Image2 from "../assets/seebg2.png";
import Image3 from "../assets/seebgphone.png";
import Image4 from "../assets/seebg2phone.png";

// import Image1 from "../assets/fts/1.jpg";
// import Image2 from "../assets/fts/2.jpg";
// import Image3 from "../assets/fts/3.jpg";
// import Image4 from "../assets/fts/4.jpg";
// import Image5 from "../assets/fts/5.jpg";
// import Image6 from "../assets/fts/6.jpg";
// import Image7 from "../assets/fts/7.jpg";
// import Image8 from "../assets/fts/8.jpg";

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
                      <Tween to={{ opacity: 1, width: "150px"}} delay={0.5} duration={0.6} from={{ opacity: 0, width: 0}}/>
                  </Timeline>
                  socially
                  <div className="hero__overlay">
                  </div>
                  <div className="bgDesktop">
                    <BackgroundSlideshow images={[ Image1, Image2]}  animationDelay= "2000"/>
                  </div>
                  <div className="bgPhone">
                    <BackgroundSlideshow images={[ Image3, Image4]}  animationDelay= "2000"/>
                  </div>
              </div>
          </div>
        </div>
    )
}

export default Hero
