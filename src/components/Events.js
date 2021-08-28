import React from 'react';
import {Carousel} from '3d-react-carousal';

import Prefect from "../assets/services/prefect.jpg";
import Iyambo from "../assets/services/iyambo.jpg";
import Flag from "../assets/services/namibiaflag.png";
import Heroes from "../assets/services/heroes.jpg";
import Cassinga from "../assets/services/cassinga.jpg";

const Events = () => {
    let slides = [
               <div className="eventDiv" style={{backgroundImage: `linear-gradient(90deg, rgb(0, 9, 87) 0%, rgba(0,19,255,0.18531162464985995) 69%), url(${Flag})`}}>
                   <ul className="eventDiv__list">
                       <li>21st: Independece Day</li>
                   </ul>
                   <span className="eventDiv__month">Mar</span>
               </div>  ,
                   <div className="eventDiv" style={{backgroundImage: `linear-gradient(90deg, rgb(0, 9, 87) 0%, rgba(0,19,255,0.18531162464985995) 69%), url(${Cassinga})`}}>
                   <ul className="eventDiv__list">
                       <li>4th: Cassinga day</li>
                   </ul>
                   <span className="eventDiv__month">May</span>
               </div> ,
                   <div className="eventDiv" style={{backgroundImage: `linear-gradient(90deg, rgb(0, 9, 87) 0%, rgba(0,19,255,0.18531162464985995) 69%), url(${Heroes})`}}>
                   <ul className="eventDiv__list">
                       <li>26th: Heroes Day</li>
                   </ul>
                   <span className="eventDiv__month">Aug</span>
               </div> ,
                   <div className="eventDiv"  style={{backgroundImage: `linear-gradient(337deg, rgb(0, 9, 87) 0%, rgba(0,19,255,0.18531162464985995) 69%), url(${Iyambo})`}}>
                   <ul className="eventDiv__list">
                       <li>14th: Abraham Iiyambo Archivers awards</li>
                   </ul>
                   <span className="eventDiv__month">Sept</span>
               </div>,
                <div className="eventDiv"  style={{backgroundImage: `linear-gradient(90deg, rgb(0, 9, 87) 0%, rgba(0,19,255,0.18531162464985995) 69%), url(${Prefect})`}}>
                    <ul className="eventDiv__list">
                         <li>15th-19th: LRC training</li>
                     </ul>
                     <span className="eventDiv__month">Dec</span>
                 </div>
                  ];
    return (
        <div>
           <Carousel slides={slides} autoplay={false} interval={1000}/>
        </div>
    )
}

export default Events
