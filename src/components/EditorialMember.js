import React, {useEffect} from 'react';
import Fade from 'react-reveal/Fade';


const EditorialMember = ({memberData}) => {
    const {pic, firstName, lastName, position, links} = memberData;
    useEffect(()=>{
        console.log(pic, firstName, lastName, position, links);
    }, [])

    return (
        <div className="grid-2--child aboutus__teamdiv__item">
            <Fade left>

            <div className="aboutus__teamdiv__item__container u-margin-bottom">
                <div style={{backgroundImage: `url(${pic})`}} className="aboutus__teamdiv__item__image"></div>
                <div className="aboutus__teamdiv__item__info ">
                    <p className="bigger-text bold-text green-ish-text">{firstName}</p>
                    <p className="bigger-text bold-text green-ish-text u-margin-bottom-small">{lastName}</p>
                    <p className="bigger-text bold-text deep-blue-text">{position}</p>
                </div>
                <div>
            </div>
            </div>
            <div className="aboutus__teamdiv__item__bottom">
            {/* <a href="https://foodlectx.netlify.app/" target="_blank"><i class="icon fas fa-eye" title="Live Demo"></i></a> */}
                {
                    links.map(link=>(
                        <a href={link.link} target="_blank"><i className={`fab fa-${link.type} `} title={link.type}></i></a>
                    ))
                }
            </div>
            </Fade>
        </div>
    )
}

export default EditorialMember
