import React from 'react';
import { Controls, PlayState, Timeline, Tween } from 'react-gsap';
import BackgroundSlideshow from 'react-background-slideshow';

import Image1 from "../assets/backdrop.png";
import Image2 from "../assets/pic1.jpg";
import Image3 from "../assets/fts/3.jpg";
import Image4 from "../assets/fts/4.jpg";
import Image5 from "../assets/fts/5.jpg";
import Image6 from "../assets/fts/6.jpg";
import Image7 from "../assets/fts/7.jpg";
import Image8 from "../assets/fts/8.jpg";

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__title">
                
              <h1>
              <Timeline target={<span className="showAbove">IAmVoting</span>}>
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
                 <Tween to={{ width: "80%", padding: "0.5rem 1rem" }} delay={-0.5} duration={0.6} from={{ width: "0px", padding: 0}}/>
            </Timeline>


              <Timeline target={ <div className="redline showAbove"></div>}>
                    <Tween to={{ opacity: 1, width: "150px"}} delay={0.5} duration={0.6} from={{ opacity: 0, width: 0}}/>
                </Timeline>
                <div className="hero__overlay">
                </div>
              <BackgroundSlideshow images={[ Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8 ]}  animationDelay= "2000"/>
            </div>

        </div>
    )
}

export default Hero
