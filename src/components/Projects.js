import React from "react";
import Nav from "./Nav"
import "./CSS/content.css"

const text = "Hi!";


const Projects = () => (
    <div>
        <section id="projects">
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
        </section>
    </div>
)

export default Projects;