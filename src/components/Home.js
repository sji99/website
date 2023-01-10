import React from "react";
import Nav from "./Nav"
import "./CSS/content.css"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import img4 from "./images/home.jpg"
import img3 from "./images/placeholder.jpg";
import "./CSS/nav.css"
import { Link } from "react-router-dom"

import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

function Home() {
    const [state, setState] = React.useState(false);

    function handleStateChange(newState) {
        setState(newState);
    }


    return (
        <div>
            {
                !state ?

                    <div className="img-container" style={{ width: '100%' }}>
                        <img id="home-img" src={img4} draggable="false" />
                        <h1 id="centered-text">Sean Ilagan</h1>
                    </div>
                    :
                    <div className="img-container" >
                        <img id="home-img" src={img4} draggable="false" />
                        <h1 id="centered-text">Sean Ilagan</h1>
                    </div>
            }
            <Nav onStateChange={handleStateChange} />
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </div>
    )
}

export default Home;