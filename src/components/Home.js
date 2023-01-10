import React, { useState, useEffect } from "react";
import Nav from "./Nav"
import "./CSS/content.css"
import 'react-slideshow-image/dist/styles.css'
import img4 from "./images/home.jpg"
import img3 from "./images/placeholder.jpg";
import "./CSS/nav.css"
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

function Home() {
    return (
        <div>
            <div id="home">
                <div className="img-container" style={{ width: '100%' }}>
                    <img id="home-img" src={img4} draggable="false" />
                    <h1 id="centered-text">Sean Ilagan</h1>
                </div>
            </div>

            <Nav />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}

export default Home;