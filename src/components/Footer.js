import React, { Component } from 'react'
import Logo from "../assets/iamvotingnam.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'




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
                       <ul style={{listStyle: "none"}}>
                           <li><FontAwesomeIcon icon={faPhoneAlt} className="footer__icon"/><p className="white-text normal-text" style={{display: "inline-block"}}>+264 81 550 3063</p></li>
                           <li><FontAwesomeIcon icon={faEnvelope} className="footer__icon"/><p className="white-text normal-text" style={{display: "inline-block"}}>info@iamvotingnam.org</p></li>
                           <li><FontAwesomeIcon icon={faMapMarkerAlt} className="footer__icon"/><p className="white-text normal-text" style={{display: "inline-block"}}>Windhoek, Naimibia</p></li>
                       </ul>
                    </section>

                    <div className="footer__seconddiv__2">
                    </div>

                </div>
                <div className="u-padding-top">
                   <p className="bigger-text white-text">Made with  <span><FontAwesomeIcon icon={faHeart} className="footer__icon" color="orange"/></span>by <a href="https://douglasmasho.github.io">byteArc</a></p>
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
