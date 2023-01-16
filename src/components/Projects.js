import React, { useState, useEffect } from "react";
import Nav from "./Nav"
import "./CSS/repo.css"
import { FaGithub } from "react-icons/fa";
import { Tabs, Tab } from "./Tabs";
import jobIcon from "./images/unicard_logo.jpg"



function Projects() {
    const [repositories, setRepositories] = useState([]);

    return (
        <div>
            <section id="projects">
                <div className="container">
                    <div className="page_title">
                        <h1>Experience & Projects</h1>
                    </div>
                    <div className="centre-container">
                        <Tabs>
                            <Tab label="Professional Experience">
                                <div className="title-left">
                                    <h1>Unicard Systems - <span>Junior Developer</span></h1>
                                    <p className="italic">Jan 2022 - Dec 2022</p>
                                </div>
                                <div className="image-content">
                                    <div>
                                        <img id="portrait" src={jobIcon} style={{width: "200px"}}></img>

                                    </div>
                                    <div style={{marginLeft: "10px"}}>
                                        <p>As a Junior Developer at Unicard Systems, I was responsible for developing and maintaining web
                                            applications for clients in various industries. My main responsibilities included:</p>
                                        <ul>
                                            <li>Collaborating with the development team to understand project requirements
                                                and deliver high-quality code.</li>
                                            <li>Writing clean, maintainable, and efficient code using .NET Core, C# and JavaScript.</li>
                                            <li>Implementing responsive design to ensure compatibility across multiple devices and platforms.</li>
                                            <li>Deploying and updating applications on AWS and Azure.</li>
                                            <li>Using Git for version control and collaborating with team members on code review.</li>
                                            <li>Troubleshooting and debugging issues and providing solutions.</li>
                                            <li>Continuously learning and staying up-to-date with the latest industry trends and technologies.</li>
                                        </ul>
                                        <p>During my time at Unicard Systems, I have had the opportunity to work on several projects, including a card printing automation system,
                                             RESTful API's to allow communications between our different systems and clients, as well as single sign-on projects to provide access to our main applications.
                                            I have also developed a SCIM API to to sync users in an Active Directory (AD) to our database so that our clients that are using AD can login through an SSO without the need to manually add their user details to a database.
                                            My time at Unicard Systems has exposed various projects and have allowed me to further develop my skills in .NET Framework, C#, and ASP.NET, as well as improve my problem-solving, designing and teamwork abilities.</p>
                                    </div>
                                </div>
                            </Tab>
                            <Tab label="GitHub Repositories">
                                <div className="content">
                                    <p>Here are some of the GitHub repositories that I have worked on over the years.</p>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects;