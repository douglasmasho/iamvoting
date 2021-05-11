import React from 'react';
import {Carousel} from '3d-react-carousal';

const Events = () => {
    let slides = [
                   <div className="eventDiv">
                   <ul className="eventDiv__list">
                       <li>21st: Independece Day</li>
                   </ul>
                   <span className="eventDiv__month">Mar</span>
               </div>  ,
                   <div className="eventDiv">
                   <ul className="eventDiv__list">
                       <li>4th: Cassinga day</li>
                   </ul>
                   <span className="eventDiv__month">May</span>
               </div> ,
                   <div className="eventDiv">
                   <ul className="eventDiv__list">
                       <li>26th: Heroe's Day</li>
                   </ul>
                   <span className="eventDiv__month">Aug</span>
               </div> ,
                   <div className="eventDiv">
                   <ul className="eventDiv__list">
                       <li>14th: Abraham Iiyambo Archivers awards</li>
                   </ul>
                   <span className="eventDiv__month">Sept</span>
               </div>,
                                  <div className="eventDiv">
                                  <ul className="eventDiv__list">
                                      <li>15th-19th: LRC training</li>
                                  </ul>
                                  <span className="eventDiv__month">Dec</span>
                              </div>
                  ];
    return (
        <div>
           <Carousel slides={slides} autoplay={false} interval={1000}/>
           {/* <div className="eventDiv">
               <ul className="eventDiv__list">
                   <li>21st: Independece Day</li>
               </ul>
               <span className="eventDiv__month">Mar</span>
           </div> */}
        </div>
    )
}

export default Events
