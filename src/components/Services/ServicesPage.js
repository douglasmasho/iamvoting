import React, {useRef,useEffect, useState} from 'react';
import { Footer } from '../Footer';
import Navbar from '../Navbar';
import {Timeline, Tween } from 'react-gsap';
import { servicesData } from './servicesData';
import ImageOne from "../../assets/services/mockpic.jpg";
import Carousel, { Dots, arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


const ServicesPage = () => {
    const modalRef = useRef();
    const overlayRef = useRef();
    const [currentService, setrCurrentService] = useState({});
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

    useEffect(()=>{
        console.log(currentService)
    })


    const showService = (item)=>{
        openModal();
        setrCurrentService(item);
    }
    return (
       <div>
           <Navbar/>
           <div className="aboutus__servicesdiv">
                    <div className="aboutus__title">
                    <h1>
                    <Timeline target={<span className="showAbove">Our</span>}>
                            <Tween to={{ y: "0", x: 0, opacity: 1, scale: 1}} duration={0.6} from={{ opacity: 0, y: "100%"}}/>
                        </Timeline>
                        
                    </h1>
                    
                    <Timeline target={
                        <h1 className="showAbove">     
                        <Timeline target={<span className="showAbove">Services</span>}>
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

                <div className="services__servicesdiv">
                    <div className="grid-2 grid">
                     {
                         servicesData.map((item, index)=>(
                             <div className="grid-2--child services__item" key={index}>
                                 <div className="center-hrz--col u-margin-bottom-big">
                                    <img src={item.logo} alt={`${item.name} logo`} className="services__item__image"/>
                                    <h3 className="services__item__text">{item.name}</h3>
                                 </div>
                                 <div className="center-hrz services__item__button">
                                    <button className="button" onClick={()=>{
                                        showService(item);
                                    }}>More</button>
                                 </div>
                             </div>
                         ))
                     }
                    </div>
                </div>

            <div className="modal services__modal"  ref={modalRef}>
              <button className="close-button" onClick={closeModal}>&times;</button>
              {
                  Object.keys(currentService).length !== 0 ?
                  <>
                  <div className="center-hrz">
                    <div className="services__modal__top row u-margin-bottom">
                            <img src={currentService.logo} alt="" className="services__modal__logo"/>
                            <h3 className="services__modal__name">{currentService.name}</h3>
                     </div>
                  </div>
                  <div className="center-hrz">
                    <div className="services__modal__bottom">
                        <div className="u-margin-bottom-big">
                        {
                            currentService.info.map((block, index)=>{
                                switch(block.type){
                                    case "paragraph": 
                                    return <p key={index} className="services__modal__text normal-text u-margin-bottom bold-text">{block.data}</p>
                                    break;
                                    case "list": 
                                    return (
                                        <div >
                                        <h4 className="bigger-text u-margin-bottom deep-blue-text" style={{padding: "0rem 0.5rem"}}>Activities</h4>
                                            <ul key={index} className="services__modal__list">
                                            {block.data.map((listItem, listItemIndex)=>(
                                                <li key={listItemIndex} className="normal-text">{listItem}</li>
                                            ))}
                                        </ul>
                                        </div>
                                    )
                                }
                            })
                        }
                        </div>

                        <Carousel
                            plugins={[
                            {
                                resolve: arrowsPlugin,
                                options: {
                                arrowLeft: <button className="slider__arrow"><i  className="lni lni-chevron-left"></i></button>,
                                arrowLeftDisabled:<button className="slider__arrow slider__arrow--disabled"><i  className="lni lni-chevron-left"></i></button>,
                                arrowRight: <button className="slider__arrow"><i  className="lni lni-chevron-right"></i></button>,
                                arrowRightDisabled: <button className="slider__arrow slider__arrow--disabled"><i  className="lni lni-chevron-right"></i></button>,
                                addArrowClickHandler: true,
                                }
                            }
                            ]}    
                        >
                            {
                                currentService.images.map((image, index)=>(
                                    <div className="slider__div">
                                        <img src={image} alt="" className="slider__image"/>
                                    </div>
                                ))
                            }
                        </Carousel>
                    </div>    
                  </div>

                  </> : null
              }
            </div>
             <div className="overlay" ref={overlayRef}></div>
   
           <Footer/>
       </div>
    )
}

export default ServicesPage
