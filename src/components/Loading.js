import React, {useEffect, useRef} from 'react';
import lottie from "lottie-web";
import LoadingAnim from "../assets/animations/loadingNew.json";

const Loading = (props) => {
    const animContainerLoading = useRef(),
          animRefLoading = useRef(null);

          useEffect(()=>{
              animRefLoading.current = lottie.loadAnimation({
                  container: animContainerLoading.current,
                  animationData: LoadingAnim,
                  loop: true
              });
              animRefLoading.current.play();
          })

          let size;
        //   switch(props.size){
        //       case "small":  size = "5rem";
        //       break;
        //       case "medium": size= "8rem";
        //       break;
        //       case "large"
        //   }
    return (
       <div className="loading__container center-hrz">
           <div ref={animContainerLoading} className="loading">
           </div>
       </div>
    )
}

export default Loading
