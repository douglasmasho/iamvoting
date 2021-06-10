import React from 'react'
import {Timeline, Tween } from 'react-gsap';
import Eye from "../assets/eye.svg";
import Arrow from "../assets/arrow-circle-up-right.svg";
import Anchor from "../assets/basic_anchor.svg";
import Fade from 'react-reveal/Fade';
import Structure from "../assets/structureNew.svg";
import Navbar from './Navbar';
import Footer from './Footer';
import Events from './Events';


const AboutUS = () => {

    const testAPI = ()=>{
        console.log("testing the API");
        async function testCreate (){
            const bodyObj = {
                question: "Does this doc help?",
                identifier: "custom_identifier",
                data: {
                    custom: "Poll Data"
                },
                options: [
                    {
                        text: "Option Text",
                        data: {
                            custom: "data"
                        }
                    },
                    {
                        text: "Option Text2",
                        data: {
                            custom: "data"
                        }
                    }
                ]
            }
            try{
               const responseJSON = await fetch("https://api.pollsapi.com/v1/create/poll", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                        "api-key": "H0YSMRWP88M4M6GM9RPMFDMN9GRN"
                    },
                    body: JSON.stringify(bodyObj)
                })

                const response = await responseJSON.json();
                console.log(response);

            }catch(e){
                console.log(e)
            }
        }
        testCreate();
    }

    const testAPIGet = ()=>{
        console.log("testing the API");
        async function testCreate (){
            const bodyObj = {
                question: "Does this doc help?",
                identifier: "custom_identifier",
                data: {
                    custom: "Poll Data"
                },
                options: [
                    {
                        text: "Option Text",
                        data: {
                            custom: "data"
                        }
                    },
                    {
                        text: "Option Text2",
                        data: {
                            custom: "data"
                        }
                    }
                ]
            }
            try{
               const responseJSON = await fetch("https://api.pollsapi.com/v1/create/poll", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                        "api-key": "H0YSMRWP88M4M6GM9RPMFDMN9GRN"
                    },
                    body: JSON.stringify(bodyObj)
                })

                const response = await responseJSON.json();
                console.log(response);

            }catch(e){
                console.log(e)
            }
        }
        testCreate();
    }

    
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
                        <h2 className="normal-text align-center">Established in 2019, SEE Namibia is the
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
                                    <p className="normal-text align-center">To advocate for youth participationand engaegement in democratic processes.</p>
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
                                    {/* <p className="normal-text align-center">Our core work is based on the understanding 
                                                of democratic processes. We empower young
                                                people as equal participants in democratic 
                                                processes with information on why, when, where 
                                                and how to vote through outreach and 
                                                education programs.
                                    </p> */}
                                         <p className="normal-text align-center">To make it easier for people to understand and participate in the 
                                         democratic process, empower young people as equal participants in democratic processes with civics and social edcation.
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
                                                leading light is the vision and mission of this network
                                            </li>
                                            <li className="u-margin-bottom"><strong style={{display: "block"}}>Inclusiveness:</strong>
                                                We recognize the powerful role played by local communities in times of crisis and in development. We want
                                                to ensure that the muted voices are heard, resources are fairly shared and partnerships are equitable and
                                                dignified.
                                            </li>
                                            <li className="u-margin-bottom"><strong style={{display: "block"}}>Commitment:</strong>
                                                The belief that mutual trust is key to success and this trust is generated by the commitment pledged by the
                                                association towards all the society members
                                            </li>
                                            <li className="u-margin-bottom"><strong style={{display: "block"}}>Professionalism and objectivity:</strong>
                                                the work is based on professional practices that are clear, smooth, and well known to all the pioneers of the
                                                organization from various social and economic levels
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
                          <iframe src="https://embedsocial.com/facebook_album/pro_instagram/3d14faa8f222bffb209265b543e1ed78bac3fc32" width="900px" height="1200px" frameborder="0" marginheight="0" marginwidth="0"></iframe>
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
