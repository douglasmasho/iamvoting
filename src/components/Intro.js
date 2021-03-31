import React from 'react';
import Fade from 'react-reveal/Fade';

const Intro = () => {
    return (
        <div className="u-margin-top-big">
                <Fade right>
                <div className="center-hrz ">
                    <h2 className="header-text red-ish-text u-margin-bottom">What we strive for</h2>
                </div> 
             </Fade>

            <div className="center-hrz">
                <Fade bottom>
                <iframe src="https://player.vimeo.com/video/531000373?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="iamvotingintro"></iframe>               </Fade>
            </div>
       </div>
    )
}

export default Intro
