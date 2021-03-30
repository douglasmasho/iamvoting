import React from 'react';
import { Controls, PlayState, Timeline, Tween } from 'react-gsap';


const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__title">
                
              <h1>
              <Timeline target={<span>IAmVoting</span>}>
                    <Tween to={{ y: "0", x: 0, opacity: 1, scale: 1}} duration={0.6} from={{ opacity: 0, y: "100%"}}/>
                </Timeline>
                  
              </h1>
              <h1>     
                  <Timeline target={<span>Namibia</span>}>
                    <Tween to={{ y: "0", x: 0, opacity: 1, scale: 1}} delay={0.5} duration={0.6} from={{ opacity: 0, y: "100%"}}/>
                </Timeline>
              </h1>

              <Timeline target={ <div className="redline"></div>}>
                    <Tween to={{ opacity: 1, width: "150px"}} delay={0.5} duration={0.6} from={{ opacity: 0, width: 0}}/>
                </Timeline>
             
            </div>

        </div>
    )
}

export default Hero
