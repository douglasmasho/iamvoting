import React, {Component} from "react";
import {Link} from "react-router-dom";
import PencilIcon from "../assets/pencil.svg";
import Users from "../assets/users.svg";


export default class Menu extends Component{
    constructor(){
        super();
        this.linkClick = this.linkClick.bind(this);
    }

    linkClick(event){
        let currentLink = document.querySelector(".activeLink");
        if(currentLink){
            currentLink.classList.remove("activeLink")
        }
        event.currentTarget.classList.add("activeLink");
    }

    componentDidMount(){
        let links = document.querySelectorAll(".menu--link");
        links.forEach((link)=>{
            link.addEventListener("click", this.linkClick);
        })
    }


    render(){
        return (<div className="menu--container">
                   <label htmlFor="smenu-1" className="menu--sub"><img src={PencilIcon} alt="bug icon"/>Write</label>
                   <input type="checkbox" id="smenu-1" className="checkBox"/>
                    <div className="menu--content menu--content__1">
                            <Link className="menu--link" to="/write/articles">Articles</Link>
                            <Link className="menu--link" to="/write/events">Events</Link>
                    </div>

                    <label htmlFor="smenu-2" className="menu--sub"><img src={Users} alt="users icon"/>My account</label>
                    <input type="checkbox" id="smenu-2" className="checkBox"/>
                    <div className="menu--content menu--content__2">
                            <Link className="menu--link" to="/write/account"><span>My account</span></Link>
                    </div>
                </div>
            )
    }
}