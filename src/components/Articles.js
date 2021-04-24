import React from 'react'
import {Route} from "react-router-dom";

const Articles = () => {
    return (
        <div className="screen">
          <p class="white-text">articles</p>
          <Route path="/write/articles/new" render={()=>{
            return <p className="white-text">joijijoijoijiojoijoijoi</p>
          }}/>
        </div>
    )
}

export default Articles
