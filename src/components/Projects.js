import React, { useState, useEffect } from "react";
import Nav from "./Nav"
import "./CSS/repo.css"
import { FaGithub } from "react-icons/fa";
import { Tabs, Tab } from "./Tabs";
import jobIcon from "./images/unicard_logo.jpg";
import oauth2 from "./images/oauth.svg";
import website from "./images/website.png";
import {AiFillThunderbolt} from "react-icons/ai"


function Projects() {
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
                                        <img id="portrait" src={jobIcon} style={{ width: "200px" }}></img>

                                    </div>
                                    <div style={{ marginLeft: "10px" }}>
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
                                <ul className="repositories">
                                    <li>
                                        <img className="repo-img" src={oauth2} ></img>
                                        <div className="repository">
                                            <div className="repo-title" ><FaGithub size="25" /><a href="https://github.com/SeanIlagan123/authenticationAPI" target="_blank">SeanIlagan123 / <span>authenticationAPI</span></a></div>
                                            <div className="desc"><p>Authentication API made with Express, Mongoose, and Node. This API implements HttpOnly cookies and OAuth2 for better login security when used in a front-end application</p></div>
                                        </div>
                                    </li>
                                    <li>
                                    <img className="repo-img" src={website} ></img>
                                        <div className="repository">
                                            <div className="repo-title" ><FaGithub size="25" /><a href="https://github.com/SeanIlagan123/website" target="_blank">SeanIlagan123 / <span>website</span></a></div>
                                            <div className="desc"><p>Github repository for portfolio website. This website is made using ReactJS</p></div>
                                        </div>
                                    </li>
                                    <li>
                                        <AiFillThunderbolt size="150px"/>
                                        <div className="repository">
                                            <div className="repo-title" ><FaGithub size="25" /><a href="https://github.com/SeanIlagan123/ClickReact" target="_blank">SeanIlagan123 / <span>ClickReact</span></a></div>
                                            <div className="desc"><p>A simple python script to cheat in reaction times for the humanbenchmark test.</p></div>
                                        </div>
                                    </li>
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