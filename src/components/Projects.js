import React, { useState, useEffect } from "react";
import Nav from "./Nav"
import "./CSS/content.css"


function Projects() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch(`https://api.github.com/users/SeanIlagan123/repos`)
            .then(response => response.json())
            .then(repositories => setRepositories(repositories));
    }, []);


    return (
        <div >
            <section id="projects">
                <div className="container">
                    <div className="page_title">
                        <h1>Projects</h1>
                    </div>
                    <div className="centre-container">
                        <ul>
                            {repositories.map(repository => (
                                <li key={repository.id}>
                                    <a href={repository.html_url}>{repository.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects;