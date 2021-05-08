import React, {useEffect, useRef} from 'react';
import {connect} from "react-redux";
import Navbar from './Navbar';
import Footer from './Footer';


const SingleArticle = (props) => {
    useEffect(()=>{
        console.log(props.currentArticle);
    })
    return (
        <>
        <Navbar/>
            <div>
                <p>Dirty birds</p>     
            </div>
        <Footer/>

        </>
    )
}

const mapStateToProps = state=>{
    return {
      articles: state.firestore.ordered.allArticles,
      currentArticle: state.currentArticle
    }
  }

export default connect(mapStateToProps)(SingleArticle)
