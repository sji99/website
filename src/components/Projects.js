import React from "react";
import Nav from "./Nav"
import "./CSS/content.css"

const text = "Hi!";


const Projects = () => (
    <div>
        <Nav />
        <div className="container">
            <div>
                <div className="page_title">
                    <h1>Projects</h1>
                </div>
            </div>
            <div className="content">
                <p>{text}</p>
            </div>
        </div>
    </div>
)

export default Projects;