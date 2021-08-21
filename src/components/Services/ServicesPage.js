import React, {useEffect} from 'react';
import { Footer } from '../Footer';
import Navbar from '../Navbar';
import {Timeline, Tween } from 'react-gsap';
import { servicesData } from './servicesData';


const ServicesPage = () => {
    useEffect(()=>{
        console.log(servicesData);
    },[])
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
                                    <button className="button">More</button>
                                 </div>
                             </div>
                         ))
                     }
                    </div>
                </div>

           <Footer/>
       </div>
    )
}

export default ServicesPage
