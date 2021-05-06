import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../redux/actions";
import {bindActionCreators} from "redux";
import Navbar from './Navbar';
import Footer from './Footer';
import {Link} from "react-router-dom";



class JoinUs extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.seeState = this.seeState.bind(this);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            address1:"",
            address2:"",
            city: "",
            region: "",
            institution: "",
            age: "",
            idnumber: ""
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
        document.querySelectorAll("input").forEach(e=> e.value = "")
        e.preventDefault();
        this.props.newMember(this.state);
    }

    componentDidUpdate(prevProps, prevState){
        console.log(this.props.error)
        
    }

    seeState = () => {
        console.log(this.state)
    }

    render() {
        return (
            <>
            <Navbar/>
        <div className="joinus__div">

            

             <div className="center-hrz ">
                    <h2 className="header-text red-ish-text u-margin-bottom">Become a member</h2>
                </div> 

                <div className="center-hrz" style={{alignItems: 'center'}}>
                        <Link to="/terms"><button className="button" style={{borderRadius: "10px"}}><p className="normal-text center-text">Subscription Terms</p></button></Link>
                    </div>
            <form  onSubmit={this.handleSubmit} className="center-hrz--col">
            <div className="input-group center-hrz--col row-2--child">
                <input type="text" name="text" id="firstName" className="input-textbox" placeholder="First name" required onChange={this.handleChange}/>
                <label htmlFor="firstName" className="input--label">First Name</label>
            </div>

            <div className="input-group center-hrz--col row-2--child">
                <input type="text" name="text" id="lastName" className="input-textbox" placeholder="Last name" required onChange={this.handleChange}/>
                <label htmlFor="lastName" className="input--label">Last Name</label>
            </div>

            <div className="input-group center-hrz--col row-2--child">
                    <input type="text" name="fullAddress" id="address1" className="input-textbox" placeholder="Address Line 1" required onChange={this.handleChange}/>
                    <label htmlFor="address1" className="input--label">Address Line 1</label>
              </div>

            <div className="input-group center-hrz--col row-2--child">
                 <input type="text" name="fullAddress" id="address2" className="input-textbox" placeholder="Address Line 2" required onChange={this.handleChange}/>
                 <label htmlFor="address2" className="input--label">Address Line 2</label>
            </div>

            <div className="input-group center-hrz--col row-2--child">
                 <input type="text" name="fullAddress" id="city" className="input-textbox" placeholder="City" required onChange={this.handleChange}/>
                <label htmlFor="city" className="input--label">City</label>
            </div>

            <div className="input-group center-hrz--col row-2--child">
                 <input type="text" name="fullAddress" id="region" className="input-textbox" placeholder="Region" required onChange={this.handleChange}/>
                 <label htmlFor="region" className="input--label">Region</label>
            </div>

            <div className="input-group center-hrz--col row-2--child">
                <input type="text" name="text" id="email" className="input-textbox" placeholder="Email Address" required onChange={this.handleChange}/>
                <label htmlFor="email" className="input--label">Email Address</label>
            </div>

            <div className="input-group center-hrz--col row-2--child">
                 <input type="number" name="number" id="age" className="input-number" placeholder="Age" required onChange={this.handleChange} min="16"/>
                 <label htmlFor="age" className="input--label">Age</label>
            </div>     

            <div className="input-group center-hrz--col row-2--child">
                 <input type="text" name="number" id="institution" className="input-number" placeholder="Instituion of Schooling" required onChange={this.handleChange}/>
                 <label htmlFor="institution" className="input--label">Institution Of Schooling</label>
            </div>   

            <div className="input-group center-hrz--col row-2--child">
                 <input type="text" name="number" id="idnumber" className="input-number" placeholder="ID Number" required onChange={this.handleChange}/>
                 <label htmlFor="idnumber" className="input--label">ID number</label>
            </div>  
            
                {/* <input type="text" id="name" placeholder="name" onChange={this.handleChange} required/>
                <input type="email" id="email" placeholder="email" onChange={this.handleChange} required/>
                <input type="number" id="age" placeholder="age" onChange={this.handleChange} required/> */}
                <button type="submit" className="button">Submit</button>
            </form>
            {/* <button onClick={this.seeState}>See state</button> */}

            <div className="center-hrz">
            {this.props.error !== null ? <p className="normal-text" style={{color: "red"}}>{this.props.error}</p> : <p style={{color: "red"}}></p>}
            </div>
        </div>
        <Footer/>
        </>
        );
    }
}


const mapStateToProps = state=>{
    return({
        members: state.members,
        error: state.joinError
    })
}

const mapDispatchToProps = dispatch=>{
    return bindActionCreators(actionCreators, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(JoinUs);