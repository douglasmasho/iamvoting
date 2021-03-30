import React from 'react';
import Logo from "../assets/iamvotingnam.svg";

const Navbar = () => {
    return (
        <div className="nav ">
            <div className="logo-container">
               <img src={Logo} alt="" className="nav__logo"/>
            </div>
            <div className="link-container">
                <a href="#" className="nav__link">Write</a>
                <a href="#" className="nav__link">About Us</a>
                <a href="#" className="nav__link">Blog</a>
                <a href="#" className="nav__link">Join Us</a>
                <a href="#" className="nav__link">Donate</a>
            </div>
        </div>
    )
}

export default Navbar;
