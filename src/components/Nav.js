import React from "react";
import { Link } from "react-router-dom"
import "./CSS/header.css"

function Nav() {
    return (
        <div className="topnav">
            <ul id="nav">
                <li id="items"><Link to='/'><p id="title">Home</p></Link></li>
                <li id="items"><Link to='/about'><p id="title">About</p></Link></li>
                <li id="items"><Link to='/skills' ><p id="title">Skills</p></Link></li>
                <li id="items"><Link to='/projects' ><p id="title">Projects</p></Link></li>
                <li id="items"><Link to='/contact' ><p id="title">Contact</p></Link></li>
            </ul>
        </div>
    )
}

export default Nav;