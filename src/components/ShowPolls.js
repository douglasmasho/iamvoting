import React from 'react';
import {Route, Redirect, Link} from "react-router-dom";


const ShowPolls = () => {
    return (
        <div className="screen">
          <div className="u-margin-bottom-huge">
            <h1 className="screen__header">Polls</h1>
            <div className="redline redline--aboutus showAbove" style={{marginTop: 0}}></div>
          </div>


          <Link className="button" to="/write/polls/new">Create Poll</Link> 
        </div>
    )
}

export default ShowPolls
