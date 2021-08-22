import React, {useRef, useState} from 'react';
import Logo from "../assets/iamvotingnam.svg";
import {Link} from "react-router-dom";
import * as actionCreators from "../redux/actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import { HamburgerArrow } from 'react-animated-burgers'
// import { slide as Menu } from 'react-burger-menu';

const Navbar = (props) => {

    const modalRef = useRef();
    const [passwordState, setPasswordState] = useState();
    const errorTextRef = useRef();
    const overlayRef = useRef();
    const [activeState, setActiveState] = useState(false);
    const mobileNavRef = useRef();

    const openModal = ()=>{
        modalRef.current.classList.add("active");
        const overlay = overlayRef.current;
        overlay.classList.add("active"); 
        // setActiveState(false);
        // mobileNavRef.current.style.display = "none";
    }
    const closeModal = ()=>{
        modalRef.current.classList.remove("active");
        // console.log(modalRef.current.classList.add("active"));
        const overlay = overlayRef.current;
        overlay.classList.remove("active"); 
        // mobileNavRef.current.style.display = "block";
    }

    const handleChange = (e)=>{
        setPasswordState(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        //call the action from here
        props.setPassword(passwordState);
        console.log(props.password)
        setTimeout(()=>{
            if(!props.password && errorTextRef.current){
                errorTextRef.current.style.display = "block";
                setTimeout(()=>{
                    errorTextRef.current.style.display = "none";
                }, 2000)
            }
        }, 2000)
    }

    // const checkRedux = (e)=>{
    //     console.log(props.password);
    // }
    return (
        <>
          <div className="nav">
            {/* <button onClick={checkRedux}>Check state</button> */}
            <div className="logo-container">
               <Link to="/"><img src={Logo} alt="" className="nav__logo"/></Link>
            </div>


            <div className="link-container">
                <ul>
                    <li className="nav__link"><Link to="/" >Home</Link></li>
                    <li className="nav__link sub-menu-link-2">
                       <Link to="/articleList" >News</Link>
                       <div className="sub-menu-2">
                            <ul>
                                <Link to="/articleList" ><li className="sub-link">Read</li></Link>
                                <li onClick={openModal} style={{cursor: "pointer"}} className="sub-link">Write</li>
                            </ul>
                        </div>

                    </li>
                    <li className="nav__link"><Link to="joinus">Join</Link></li>
                    <li className="nav__link sub-menu-link">
                        <Link to="/aboutus">About</Link>
                        <div className="sub-menu-1">
                            <ul>
                            <a href="/aboutus" ><li className="sub-link">Introduction</li></a>
                                <a href="/aboutus#team" ><li className="sub-link">The Team</li></a>
                                <a href="/aboutus#gallery"><li className="sub-link">Gallery</li></a>
                                {/* <Link to="/" ><li className="sub-link">Achievements</li></Link> */}
                                <a href="/aboutus#events" ><li className="sub-link">Events</li></a>
                                
                            </ul>
                        </div>
                    </li>
                    <li className="nav__link"><Link to="/services">Services</Link></li>
                    <li className="nav__link"><a href="#contactus">Contact</a></li>
                    {/* <li className="nav__link"><Link to="/" >Donate</Link></li> */}
                </ul>
            </div>


        </div>

        <div className="nav--mobile">

            <div className="logo-container">
               <Link to="/"><img src={Logo} alt="" className="nav__logo"/></Link>
            </div>
            <div className="center-vert u-margin-right">
                    <HamburgerArrow isActive={activeState} toggleButton={()=>{
                    setActiveState(!activeState);
                }}/>
            </div>
        </div>

        {
            activeState ? 
            <div>
            <div className="link-container__mobile" ref={mobileNavRef}>
                <ul>
                    <li className="nav__link"><Link to="/" onClick={()=>{setActiveState(!activeState);}}>Home</Link></li>
                    <li className="nav__link sub-menu-link-2">
                       <p>News</p>
                       <div className="sub-menu-2">
                            <ul>
                                <Link to="/articleList" ><li className="sub-link" onClick={()=>{setActiveState(!activeState);}}>Read</li></Link>
                                <li onClick={openModal} style={{cursor: "pointer"}} className="sub-link" >Write</li>
                            </ul>
                        </div>

                    </li>
                    <li className="nav__link" onClick={()=>{setActiveState(!activeState);}}><Link to="joinus">Join</Link></li>
                    <li className="nav__link sub-menu-link" onClick={()=>{setActiveState(!activeState);}}>
                        <Link to="/aboutus">About</Link>
                        {
                                                //     <div className="sub-menu-1">
                                                //     <ul>
                                                //     <a href="/aboutus" ><li className="sub-link">Introduction</li></a>
                                                //         <a href="/aboutus#team" ><li className="sub-link">The Team</li></a>
                                                //         <Link to="/"><li className="sub-link">Gallery</li></Link>
                                                //         {/* <Link to="/" ><li className="sub-link">Achievements</li></Link> */}
                                                //         <a href="/aboutus#events" ><li className="sub-link">Events</li></a>
                                                //     </ul>
                                                // </div>
                        }
                    </li>
                    <li className="nav__link"><Link to="/services">Services</Link></li>
                    <li className="nav__link" onClick={()=>{setActiveState(!activeState);}}><a href="#contactus">Contact</a></li>
                    {/* <li className="nav__link"><Link to="/" >Donate</Link></li> */}
                </ul>
            </div>
            </div> : null
        }

<div className="modal"  ref={modalRef}>
              <button className="close-button" onClick={closeModal}>&times;</button>
              <form action="" onSubmit={handleSubmit}>        
                  <div className="input-group center-hrz--col">
                   <input type="password" id="writerPass" className="input-password" placeholder="enter writer's password" required onChange={handleChange}/>
                   <label htmlFor="writerPass" className="input--label">Writer's password</label>
                  <button type="submit" className="button u-margin-bottom">Go</button>
                  </div>
                  <div className="center-hrz">
                  {props.password ? <Link className="button" to="/write/account" onClick={closeModal}>Start Writing</Link> : null}
                  </div>
                  {!props.password ? <p className="red-ish-text align-center u-margin-top normal-text" ref={errorTextRef} style={{display: "none"}}>Password is incorrect</p> : null}            
              </form>
            </div>

          <div className="overlay" ref={overlayRef}></div>
        </>

    )
}

const mapStateToProps = state=>({ //this is the state in the store ///this will take the state from the store and put it as props in the component that is being connected
    password: state.password,
    passwordErr: state.passwordErr
  });
  
  const mapDispatchToProps = dispatch=>{ //this will allow you to dispatch actions from anywhere in the compoonent
    return bindActionCreators(actionCreators, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
