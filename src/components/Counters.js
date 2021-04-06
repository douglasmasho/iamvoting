import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../redux/actions";
import {bindActionCreators} from "redux";

const Counters = (props) => {

    
    return (
        <div className="center-hrz u-margin-top-huge">
         <div className="counters__div">
             <div className="counters__counter">
                 <p className="counters__number">14</p>
                 <p>Regions</p>
             </div>
             <div className="counters__counter">
                 <p className="counters__number">{props.count}</p>
                 <p>Members</p>
             </div>
         </div>
        </div>

    )
}

const mapStateToProps = state=>({
    count: state.counter
})

const mapDispatchToProps = dispatch =>{
    return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counters);
