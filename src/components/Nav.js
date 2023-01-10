import React, { useState, useEffect, useRef } from "react";
import "./CSS/hamburger.css";
import { FaHome } from "react-icons/fa";
import Hamburger from "./Hamburger";


function Nav() {
    const navRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    function handleStateChange(newState) {
        setIsOpen(newState);
    }

    useEffect(() => {
        const handleClick = (event) => {
            
            if (event.target.className == 'hamburger-button' || event.target.className == 'hamburger-line') { 
                if (isOpen) {
                    setIsOpen(false);
                } else {
                    setIsOpen(true);
                }
            }
            else if (navRef.current && !navRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        }
    }, [isOpen]);

    return (
        <div >
            <Hamburger onStateChange={handleStateChange} />
            {isOpen ?
                <div className="navbar" ref={navRef}>
                    <div className="home-button">
                        <p><a href="#home"><FaHome color="#CCCCCC" size="30" /></a></p>
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
export default Nav;