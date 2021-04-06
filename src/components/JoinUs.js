import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import * as actionCreators from "../redux/actions";
import {bindActionCreators} from "redux";

class JoinUs extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            name: "",
            email: "",
            age: "",
        };
    }

    handleChange = (e)=>{
        this.setState((state, prevState)=>{
            return {
                [e.target.id]: e.target.value, //use square brackets to use a string as a property name
            }
        })

    }

    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.newMember(this.state);
    }

    render() {
        return (
        <div className="joinus__div">
            <form  onSubmit={this.handleSubmit}>
                <input type="text" id="name" placeholder="name" onChange={this.handleChange}/>
                <input type="email" id="email" placeholder="email" onChange={this.handleChange}/>
                <input type="number" id="age" placeholder="age" onChange={this.handleChange}/>
                <button type="submit">Submit</button>
            </form>
            <button onClick={()=>console.log(this.props.members)}>See new State</button>
        </div>
        );
    }
}


const mapStateToProps = state=>{
    return({
        members: state.members
    })
}

const mapDispatchToProps = dispatch=>{
    return bindActionCreators(actionCreators, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(JoinUs);