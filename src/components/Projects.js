import React, { useState, useEffect } from "react";
import Nav from "./Nav"
import "./CSS/repo.css"
import { FaGithub } from "react-icons/fa";
import { Tabs, Tab } from "./Tabs";



function Projects() {
    const [repositories, setRepositories] = useState([]);
    const filter = ["enboardertechtest", "pixelmon-notify", "crop_test", "YouTubeLI", "Gamble"]; // do not include these repos in list.

    console.log(process.env.API_TOKEN);

    function getFetchOptions(token) {
        return {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };
    }

    useEffect(() => {
        fetch(`https://api.github.com/users/SeanIlagan123/repos`, getFetchOptions(process.env.API_TOKEN))
            .then(response => response.json())
            .then(repositories => setRepositories(repositories));
    }, []);

    // check if not in the filter list, and use those values instead
    const filteredRepositories = repositories.filter(repo => !filter.some(name => name === repo.name));
    // order by last updated.
    const orderedRepositories = filteredRepositories.sort((a, b) => b.updated_at.localeCompare(a.updated_at));

    return (
        <div >
            <section id="projects">
                <div className="container">
                    <div className="page_title">
                        <h1>Projects</h1>
                    </div>
                    <div className="centre-container">
                        <Tabs>
                            <Tab label="Work Experience">

                            </Tab>
                            <Tab label="GitHub Repositories">
                                <div className="centre-container">
                                    <p>This is updated in real-time and is linked to my GitHub account</p>
                                </div>

                                <ul className="repositories">
                                    {orderedRepositories.map(repository => (
                                        <li key={repository.id}>
                                            <div className="repository">
                                                <div className="repo-title" ><FaGithub size="25" /><a href={repository.html_url} target="_blank">SeanIlagan123 / <span>{repository.name}</span></a></div>
                                                <div className="desc"><p>{repository.description}</p></div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects;