import React from 'react';
import Fade from 'react-reveal/Fade';
import Twitter from "../assets/twitter.svg";
import { Timeline } from 'react-twitter-widgets'
const Socials = () => {
    return (
        <div className="u-margin-top-big">
            <Fade right>
                <div className="center-hrz">
                    <h2 className="header-text red-ish-text u-margin-bottom">Our Socials</h2>
                </div> 
            </Fade>
            <div className="socials-div u-margin-bottom-huge">
                    <Fade>
                        {/* <img src={Twitter} alt="" className="socials-icon"/> */}
                        <div className="center-hrz">
                                <Timeline
                                    dataSource={{
                                        sourceType: 'profile',
                                        screenName: 'see_namibia'
                                    }}
                                    options={{
                                        height: '500',
                                        width: "700"
                                    }}
                                />
                        </div>
                    </Fade>
            </div>
        </div>
    )
}

export default Socials
