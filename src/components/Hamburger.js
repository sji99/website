import React, { useState } from 'react';
import "./CSS/hamburger.css";

function Hamburger(props) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen(!isOpen);
        props.onStateChange(!isOpen);
    }

    return (
        <button className="hamburger-button" onClick={toggleMenu}>
            <div className="hamburger-line"/>
            <div className="hamburger-line"/>
            <div className="hamburger-line"/>
        </button>
    );
};

export default Hamburger;