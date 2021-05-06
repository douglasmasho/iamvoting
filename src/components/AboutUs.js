import React from 'react'
import { Controls, PlayState, Timeline, Tween } from 'react-gsap';
import Eye from "../assets/eye.svg";
import Arrow from "../assets/arrow-circle-up-right.svg";
import Anchor from "../assets/basic_anchor.svg";
import Fade from 'react-reveal/Fade';
import Structure from "../assets/structure.svg";
import Navbar from './Navbar';
import Footer from './Footer';

const AboutUS = () => {
    return (
        <>
        <Navbar/>
        <div>
                    <div className="aboutus__herodiv">
                    <div className="aboutus__title">
                    <h1>
                    <Timeline target={<span className="showAbove">About</span>}>
                            <Tween to={{ y: "0", x: 0, opacity: 1, scale: 1}} duration={0.6} from={{ opacity: 0, y: "100%"}}/>
                        </Timeline>
                        
                    </h1>
                    
                    <Timeline target={
                        <h1 className="showAbove">     
                        <Timeline target={<span className="showAbove">Us</span>}>
                                <Tween to={{ y: "0", x: 0, opacity: 1, scale: 1}} delay={0.5} duration={0.6} from={{ opacity: 0, y: "100%"}}/>
                            </Timeline>
                        </h1>
                    }>
                        <Tween to={{ width: "auto", padding: "0.5rem 1rem" }} delay={-0.5} duration={0.6} from={{ width: "0px", padding: 0}}/>
                    </Timeline>


                    <Timeline target={ <div className="redline showAbove"></div>}>
                            <Tween to={{ opacity: 1, width: "100px"}} delay={0.5} duration={0.6} from={{ opacity: 0, width: 0}}/>
                        </Timeline>
                        </div>
                </div>

                <div className="aboutus__aboutdiv u-margin-bottom-big">
                    <div className="u-padding-large u-margin-bottom-big">
                        <h2 className="normal-text align-center">Established in 2019, I Am Voting Namibia is the
                                    first youth organization to be accredited by the 
                                    Electoral Commission of Namibia (ECN). The 
                                    organization is registered under the ministry
                                    of youth, sport and culture, and we provide 
                                    voter and civic education to the general public.
                        </h2>
                    </div>

                    <div className="center-hrz--col">

                        <Fade right>
                            <section className="aboutus__introdiv" id="vision">
                                   <Fade left>
                                   <img src={Eye} alt="" className="aboutus__icon aboutus__icon--right"/>
                                   </Fade>
                                    <h1 className="aboutus__intro-title">Our Vision</h1>
                                    <div className="center-hrz u-margin-bottom-small">
                                    <div className="redline redline--aboutus showAbove" style={{marginTop: 0}}></div>
                                    </div>
                                    <p className="normal-text align-center">I AM VOTING Namibia strives to be the 
                                    leading organization in activating the participation of young people in democratic processes. 
                                    </p>
                                </section>
                        </Fade>



                            <Fade left>
                                <section className="aboutus__introdiv" id="mission">
                                    <Fade right>
                                    <img src={Arrow} alt="" className="aboutus__icon aboutus__icon--left"/>
                                    </Fade>
                                    <h1 className="aboutus__intro-title">Our Mission</h1>
                                    <div className="center-hrz u-margin-bottom-small">
                                    <div className="redline redline--aboutus showAbove" style={{marginTop: 0}}></div>
                                    </div>
                                    <p className="normal-text align-center">Our core work is based on the understanding 
                                                of democratic processes. We empower young
                                                people as equal participants in democratic 
                                                processes with information on why, when, where 
                                                and how to vote through outreach and 
                                                education programs.
                                    </p>
                                </section>
                            </Fade>

                            <Fade right>
                                <section className="aboutus__introdiv" id="values">
                                    <Fade left>
                                    <img src={Anchor} alt="" className="aboutus__icon aboutus__icon--right"/>
                                    </Fade>
                                    <h1 className="aboutus__intro-title">Our Values</h1>
                                    <div className="center-hrz u-margin-bottom-small">
                                    <div className="redline redline--aboutus showAbove" style={{marginTop: 0}}></div>
                                    </div>
                                    <p className="normal-text align-center" style={{zIndex: "5", position:"relative"}}>
                                        <ul style={{listStyle: "none"}}>
                                            <li>Independence</li>
                                            <li>Inclusiveness</li>
                                            <li>Commitment</li>
                                            <li>Professionalism and objectivity: Teamwork culture</li>

                                        </ul>
                                    </p>
                                </section>
                            </Fade>

                    </div>

                </div>
                    
                    <section className="aboutus__teamdiv" id="team">
                        <Fade>
                        <h2 className="header-text red-ish-text u-margin-bottom-small">The team</h2>
                        </Fade>
                        <h2 className="white-text bigger-text align-center u-margin-bottom-big">Our organizational structure</h2>
                        
                            <div className="center-hrz">
                            <img src={Structure} alt="" style={{width: "100%"}}/>
                            </div>

                    </section>
        </div>
        <Footer/>
     </>
    )
}

export default AboutUS
