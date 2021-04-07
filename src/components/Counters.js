import React, {useEffect} from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../redux/actions";
import {bindActionCreators} from "redux";
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";

const Counters = (props) => {
    let counter = <p></p>;


    return (
        <div className="center-hrz u-margin-top-huge">
         <div className="counters__div">
             <div className="counters__counter">
                 <p className="counters__number">14</p>
                 <p>Regions</p>
             </div>
             <div className="counters__counter">
                 {props.count && props.count.length >=1 ? <p className="counters__number">{props.count[0].mNumber}</p>: null}
                 <p>Members</p>
             </div>
         </div>
        </div>

    )
}

const mapStateToProps = state=>({
    count: state.firestore.ordered.newMembers
})

const mapDispatchToProps = dispatch =>{
    return bindActionCreators(actionCreators, dispatch)
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{collection: "newMembers"}])
)(Counters);
