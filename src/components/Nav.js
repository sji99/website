import React, { useState } from "react";
import { Link } from "react-router-dom"
import "./CSS/hamburger.css";
import { FaHome } from "react-icons/fa";
import PropTypes from 'prop-types';


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
                    <div className="home-button">
                        <Link to='/' ><p><FaHome color="#CCCCCC" size="30"/></p></Link>
                    </div>
                    <ul>
                        <li><p><a href="#about">About</a></p></li>
                        <li><p><a href="#skills">Skills</a></p></li>
                        <li><p><a href="#projects">Projects</a></p></li>
                        <li><p><a href="#contact">Contact</a></p></li>
                    </ul>
                </div> : null
            }
        </div>
    )
}

Nav.propTypes = {
    onStateChange: PropTypes.func, // optional prop
};

Nav.defaultProps = {
    onStateChange: () => {}, // default value for the optional prop
};

export default Nav;