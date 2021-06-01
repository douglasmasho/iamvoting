import React, {useEffect, useRef} from 'react';
import lottie from "lottie-web";
import LoadingAnim from "../assets/animations/loadingNew.json";


const JustAnimation = () => {
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

    return (
      <div className="loadingSmall__container center-hrz">
           <div ref={animContainerLoading} className="loadingSmall">
           </div>
       </div>
    )
}

export default JustAnimation
