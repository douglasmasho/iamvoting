import React, { Component } from 'react'
import Logo from "../assets/iamvotingnam.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";
import Twitter from "../assets/twitter.svg";


export class Footer extends Component {
    constructor(){
        super();
        // this.state = {

        // }
    }
    render() {
        return (
        <div className="footer">
            <div className="footer__newsletter-form">
                <div className="footer__firstdiv">
                    <div className="footer__firstdiv__1">
                        <h3 className="white-text header-text">Stay Updated</h3>
                        <p className="white-text normal-text">subscribe to our newsletter</p>
                    </div>
                    <div className="footer__firstdiv__2">
                    <form action="">
                           <input id="sub-email" type="email" placeholder="enter your email address" className="footer__text u-margin-right input-text" required/>
                           <button type="submit" className="button">Subscribe</button>
                     </form>
                    </div>
                </div>

                <div className="footer__seconddiv">
                    <section id="contactus" className="footer__seconddiv__1">
                       <img src={Logo} alt="" className="footer__logo"/>
                       <ul style={{listStyle: "none"}} className="center-vert">
                           <li><FontAwesomeIcon icon={faPhoneAlt} className="footer__icon"/><p className="white-text normal-text" style={{display: "inline-block"}}>+264 81 550 3063</p></li>
                           <li><FontAwesomeIcon icon={faEnvelope} className="footer__icon"/><p className="white-text normal-text" style={{display: "inline-block"}}>info@iamvotingnam.org</p></li>
                           <li><FontAwesomeIcon icon={faMapMarkerAlt} className="footer__icon"/><p className="white-text normal-text" style={{display: "inline-block"}}>Windhoek, Naimibia</p></li>
                       </ul>
                    </section>

                    <div className="footer__seconddiv__2">
                        <p className="bigger-text white-text u-margin-bottom-small">Social Media</p>
                        <ul style={{listStyle: "none"}} className="footer__social-list  u-margin-bottom-small">
                            <li><a href="https://twitter.com/iamvoting_nam/"><img src={Twitter} alt="twitter-link" className="footer__social-icon"/></a></li>
                            <li><a href="https://www.instagram.com/iamvoting_nam/"><img src={Instagram} alt="instagram-link" className="footer__social-icon"/></a></li>
                            <li><a href="https://www.facebook.com/Iamvoting_nam-102697754419237/"><img src={Facebook} alt="facebook-link" className="footer__social-icon"/></a></li>
                       </ul>
                       <p className="bigger-text white-text u-margin-bottom-small">@iamvoting_nam</p>
                    </div>

                </div>
                <div className="u-padding-top">
                   <p className="bigger-text white-text" style={{textAlign: "center"}}>Made with  <span><FontAwesomeIcon icon={faHeart} className="footer__icon" style={{color: "orange"}}/></span>by <a style={{color: "orange"}} href="https://douglasmasho.github.io">byteArc</a></p>
                   <p  className="normal-text white-text" style={{textAlign: "center"}}> &#169; IAmVoting Namibia</p>
                </div>
            </div>
        </div>
        )
    }
}

export default Footer





// import React from 'react'

// const Footer = () => {
//     return (

//     )
// }

// export default Footer
