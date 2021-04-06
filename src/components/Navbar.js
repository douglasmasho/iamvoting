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
                <Link to="/" className="nav__link">Home</Link>
                <Link to="#" className="nav__link">Blog</Link>
                {/*create a read and write dropdown*/}
                <Link to="joinus" className="nav__link">Join Us</Link>
                <Link to="#" className="nav__link">About Us</Link>
                <Link to="#" className="nav__link">Contact Us</Link>
                <Link to="#" className="nav__link">Donate</Link>
            </div>
        </div>
    )
}

export default Navbar;
