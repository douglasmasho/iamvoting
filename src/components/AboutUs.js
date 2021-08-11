import React from 'react';
import {Timeline, Tween } from 'react-gsap';
import Eye from "../assets/eye.svg";
import Arrow from "../assets/arrow-circle-up-right.svg";
import Anchor from "../assets/basic_anchor.svg";
import Fade from 'react-reveal/Fade';
import Structure from "../assets/editorialTeam.svg";
import Navbar from './Navbar';
import Footer from './Footer';
import Events from './Events';


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
                        <h2 className="normal-text align-center">Established in 2019, as I Am Voting Namibia now SEE (Socially Enabled Education), We are the
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
                                    {/* <p className="normal-text align-center">For Namibian youth to be actively paritcipating in the democratic process. </p> */}
                                    <p className="normal-text align-center">Namibian youth actively participating in democratic processes.</p>
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
                                         <p className="normal-text align-center">Provide transformative and empowering leadership opportunities to young people through civic engagement, 
                                                social education and leadership capacity building. Our core work shall be achieved by becoming a strategic 
                                                partner to government in ensuring that all democratic rights are upheld by both the state and the citizens at 
                                                large. 
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
                                        {/* <ul style={{listStyle: "none"}}>
                                            <li>Independence</li>
                                            <li>Inclusiveness</li>
                                            <li>Commitment</li>
                                            <li>Professionalism and objectivity: Teamwork culture</li>
                                        </ul> */}
                                        <ul style={{listStyle: "none"}}>
                                            <li className="u-margin-bottom"><strong style={{display: "block"}}>Independence:</strong>
                                                While we depend on support of our partners and donors, we are independent of outside influences. Our
                                                leading light is the vision and mission of this network.
                                            </li>
                                            <li className="u-margin-bottom"><strong style={{display: "block"}}>Inclusiveness:</strong>
                                            We recognize the powerful role played by local authorities in times of crisis and in development. We want to foster an understanding of the important role played by local 
                                            authorities in times of crisis and in fostering development.
                                            </li>
                                            <li className="u-margin-bottom"><strong style={{display: "block"}}>Commitment:</strong>
                                                The belief that mutual trust is key to success and this trust is generated by the commitment pledged by the
                                                association towards all the society members.
                                            </li>
                                            <li className="u-margin-bottom"><strong style={{display: "block"}}>Professionalism and objectivity:</strong>
                                                The work is based on professional practices that are clear, smooth, and well known to all the pioneers of the
                                                organization from various social and economic levels.
                                            </li>
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


                    <section className="aboutus__eventsdiv" id="events">
                       <Fade>
                        <h2 className="header-text red-ish-text u-margin-bottom-small">Events</h2>
                        </Fade>
                        <Events/>
                    </section>

                    <section className="aboutus__eventsdiv" id="gallery">
                        <Fade>
                        <h2 className="header-text red-ish-text u-margin-bottom-small">Gallery</h2>
                        </Fade>
                        <div className="center-hrz">
                          <iframe src="https://embedsocial.com/facebook_album/pro_instagram/aee3e8ca605abf31b1eb17f667609d13aed105be'" width="900px" height="1200px" frameborder="0" marginheight="0" marginwidth="0"></iframe>
                        </div>
                    </section>
                    {/* <button onClick={testAPI}>Test the API</button>
                    <button onClick={testAPIGet}>Test the API</button> */}
        </div>
        <Footer/>
     </>
    )
}

export default AboutUS
