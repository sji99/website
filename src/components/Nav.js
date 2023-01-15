import React, { useState, useEffect, useRef } from "react";
import "./CSS/hamburger.css";
import { FaHome, FaQuestionCircle, FaRocket, FaListUl, FaPhoneSquare, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import Hamburger from "./Hamburger";

function Nav() {
    const navRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);

    function handleStateChange(newState) {
        setIsOpen(newState);
    }

    // handles click off navbar logic
    useEffect(() => {
        const handleClick = (event) => {
            if (isMobileView) {
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
        }
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        }
    }, [isOpen, isMobileView]);

    // handles hamburger menu appearance based off screen size.
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 872px)");
        setIsMobileView(mediaQuery.matches);
        const handleScreenChange = (e) => setIsMobileView(e.matches)
        mediaQuery.addEventListener('change', handleScreenChange);
        return () => mediaQuery.removeEventListener('change', handleScreenChange);
    }, [isMobileView]);

    // change nav colour when scrolling
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor);

    return (
        <div >
            {
                isMobileView ? <Hamburger onStateChange={handleStateChange} /> : null
            }

            {isOpen || !isMobileView ?
                <div className="navbar" ref={navRef}
                    style={{ backgroundColor: color || isMobileView ? "#333333" : "rgba(51, 51, 51, 0.2)" }}>
                    <h1>Portfolio</h1>
                    <ul>
                        <li><a href="#about"><FaQuestionCircle color="#CCCCCC" size="15" className="icon" /><p>About</p></a></li>
                        <li><a href="#skills"><FaListUl color="#CCCCCC" size="15" className="icon" /><p>Skills</p></a></li>
                        <li><a href="#projects"><FaRocket color="#CCCCCC" size="15" className="icon" /><p>Projects</p></a></li>
                        <li><a href="#contact"><FaPhoneSquare color="#CCCCCC" size="15" className="icon" /><p>Contact</p></a></li>
                    </ul>

                    <div className="bottom-nav-section">
                        <ul>
                        <li><a href = "https://github.com/SeanIlagan123" target="_blank"><FaGithub color="#CCCCCC" size="25" className="icon" /></a></li>
                        <li><a href = "https://www.linkedin.com/in/sean-ilagan-96163818a/" target="_blank"><FaLinkedin color="#CCCCCC" size="25" className="icon" /></a></li>
                        <li><a href="#home"><FaHome color="#CCCCCC" size="25" className="icon" /></a></li>
                        </ul>
                        
                    </div>
                </div> : null
            }
        </div>
    )
}
export default Nav;