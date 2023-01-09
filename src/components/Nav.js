import React, { useState } from "react";
import { Link } from "react-router-dom"
import "./CSS/header.css"
import "./CSS/hamburger.css"

function Nav(props) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen(!isOpen);
        props.onStateChange(!isOpen);
    }

    return (
        <div >
            <button className="hamburger-button" onClick={toggleMenu}>
                <div className="hamburger-line" />
                <div className="hamburger-line" />
                <div className="hamburger-line" />
            </button>
            {isOpen ?
                <div className="navbar">
                    <ul>
                        <li><Link to='/about'><p>About</p></Link></li>
                        <li><Link to='/skills' ><p>Skills</p></Link></li>
                        <li><Link to='/projects' ><p>Projects</p></Link></li>
                        <li><Link to='/contact' ><p>Contact</p></Link></li>
                    </ul>
                </div> : null
            }
        </div>
    )
}

export default Nav;