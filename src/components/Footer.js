import React, { Component, createRef } from 'react'
import Logo from "../assets/seelogodarkbg.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import {connect} from "react-redux";
import * as actionCreators from "../redux/actions";
import {bindActionCreators} from "redux";


import Facebook from "../assets/facebookwhite.svg";
import Instagram from "../assets/instagramwhite.svg";
import Twitter from "../assets/twitter.svg";


export class Footer extends Component {
    constructor(){
        super();
        this.state = {
            subEmail: "",
        }
        this.inputRef = createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e)=>{
        console.log("uiuhiuh");
        this.setState((state,prevState)=>{
           return {
            [e.target.id]: e.target.value
           } 
        })  
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.subscribe(this.state.subEmail);
        this.inputRef.current.value = "";
        this.inputRef.current.placeholder = "you have subscribed to our newsletter";
        setTimeout(()=>{
            this.inputRef.current.placeholder = "enter an email address";
        }, 2000);

        ///submit to firebase
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
                    <form action="" onSubmit={this.handleSubmit}>
                        <div className="footer__inputContainer">
                          <input id="subEmail" type="email" placeholder="enter your email address" className="footer__inp input-text footer__text u-margin-right " required onChange={this.handleChange} ref={this.inputRef}/>
                        </div>
                        <div className="footer__buttonContainer">
                        <button type="submit" className="button">Subscribe</button>
                        </div>
                     </form>
                    </div>
                </div>

                <div className="footer__seconddiv">
                    <section id="contactus" className="footer__seconddiv__1">
                       <img src={Logo} alt="" className="footer__logo"/>
                       <ul style={{listStyle: "none"}} className="center-vert">
                           <li><FontAwesomeIcon icon={faPhoneAlt} className="footer__icon"/><p className="white-text normal-text" style={{display: "inline-block"}}>+264 81 550 3063</p></li>
                           <li><FontAwesomeIcon icon={faEnvelope} className="footer__icon"/><p className="white-text normal-text" style={{display: "inline-block"}}>seenamibiaorg@gmail.com</p></li>
                           <li><FontAwesomeIcon icon={faMapMarkerAlt} className="footer__icon"/><p className="white-text normal-text" style={{display: "inline-block"}}>Windhoek, Naimibia</p></li>
                       </ul>
                    </section>

                    <div className="footer__seconddiv__2">
                        <p className="bigger-text white-text u-margin-bottom-small">Social Media</p>
                        <ul style={{listStyle: "none"}} className="footer__social-list  u-margin-bottom-small">
                            <li><a target="_blank" href="https://twitter.com/see_namibia"><img src={Twitter} alt="twitter-link" className="footer__social-icon"/></a></li>
                            <li><a target="_blank" href="https://www.instagram.com/see_namibia/"><img src={Instagram} alt="instagram-link" className="footer__social-icon"/></a></li>
                            <li><a target="_blank" href="https://www.facebook.com/Iamvoting_nam-102697754419237"><img src={Facebook} alt="facebook-link" className="footer__social-icon"/></a></li>
                       </ul>
                       <p className="bigger-text white-text u-margin-bottom-small">@see_namibia</p>
                    </div>

                </div>
                <div className="u-padding-top">
                   {/* <p className="bigger-text white-text" style={{textAlign: "center"}}>Made with  <span><FontAwesomeIcon icon={faHeart} className="footer__icon" style={{color: "orange"}}/></span>by <a style={{color: "orange"}} href="https://douglasmasho.github.io">byteArc</a></p> */}
                   <p className="normal-text white-text center-text">SEE wishes to acknowledge and thank its partners, who make the accomplishment of our vision a reality.
All content © SEE Unless otherwise noted images are supplied by SEE Multimedia.
This website was created by <a href="https://douglasmasho.github.io/" className="link">ByteArc.</a></p>
                   <p  className="normal-text white-text" style={{textAlign: "center"}}> &#169; SEE Namibia</p>
                </div>
            </div>
        </div>
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators(actionCreators, dispatch)
}

export default connect(null, mapDispatchToProps)(Footer);

