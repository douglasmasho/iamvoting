import React from 'react';
import Logo from "../assets/iamvotingnam.svg";
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div className="nav ">
            <div className="logo-container">
               <Link to="/"><img src={Logo} alt="" className="nav__logo"/></Link>
            </div>
            <div className="link-container">
                <ul>
                    <li className="nav__link"><Link to="/" >Home</Link></li>
                    <li className="nav__link sub-menu-link-2">
                       <Link to="/" >Blog</Link>
                       <div className="sub-menu-2">
                            <ul>
                                <Link to="/" ><li className="sub-link">Read</li></Link>
                                <Link to="/" ><li className="sub-link">Write</li></Link>
                            </ul>
                        </div>

                    </li>
                    <li className="nav__link"><Link to="joinus">Join Us</Link></li>
                    <li className="nav__link sub-menu-link">
                        <Link to="/aboutus">About Us</Link>
                        <div className="sub-menu-1">
                            <ul>
                            <Link to="/aboutus#vision" ><li className="sub-link">Introduction</li></Link>
                                <Link to="/" ><li className="sub-link">The Team</li></Link>
                                <Link to="joinus"><li className="sub-link">Gallery</li></Link>
                                <Link to="/" ><li className="sub-link">Achievements</li></Link>
                                <Link to="/" ><li className="sub-link">Events</li></Link>
                            </ul>
                        </div>
                    </li>
                    <li className="nav__link"><a href="#contactus">Contact us</a></li>
                    <li className="nav__link"><Link to="/" >Donate</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
