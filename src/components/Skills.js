import React from "react";
import Nav from "./Nav"
import "./CSS/content.css"
import "./CSS/skills-content.css"
import { FaAws } from "react-icons/fa";
import { SiMicrosoftazure } from "react-icons/si"

function Skills() {

    return (
        <div>
            <section id="skills">
                <div className="container">
                    <div>
                        <div className="page_title">
                            <h1>Skills</h1>
                        </div>
                    </div>

                    <div className="content">
                        <div className="skill-list">
                            <div className="skill-card" id="front-end">
                                <p>Frontend Development</p>
                                <div className="skill-icons">
                                    <i id="reactjsicon" className="devicon-react-original-wordmark colored p-icon" />
                                    <i id="html5icon" className="devicon-html5-plain-wordmark colored p-icon" />
                                    <i id="cssicon" className="devicon-css3-plain-wordmark colored p-icon" />
                                    <i id="jsicon" className="devicon-javascript-plain colored p-icon" />
                                    <i id="jqueryicon" className="devicon-jquery-plain-wordmark colored p-icon" />
                                </div>
                            </div>
                            <div className="skill-card" id="back-end">
                                <p>Backend Development</p>
                                <div className="skill-icons">
                                    <i id="nodejsicon" className="devicon-nodejs-plain colored p-icon" />
                                    <i id="dotneticon" className="devicon-dotnetcore-plain colored p-icon" />
                                    <i id="javaicon" className="devicon-java-plain colored p-icon" />
                                    <i id="pythonicon" className="devicon-python-plain colored p-icon" />
                                    <i id="csharpicon" className="devicon-csharp-plain colored p-icon" />
                                </div>

                            </div>
                            <div className="skill-card" id="databases">
                                <p>Databases</p>
                                <div className="skill-icons">
                                    <i id="sqlicon" className="devicon-postgresql-plain-wordmark colored p-icon" />
                                    <i id="mongoicon" className="devicon-mongodb-plain-wordmark colored p-icon" />
                                    <i id="mysqlicon" className="devicon-mysql-plain-wordmark colored p-icon"></i>
                                    <i id="mssicon" className="devicon-microsoftsqlserver-plain-wordmark colored p-icon" />
                                </div>
                            </div>
                            <div className="skill-card" id="cloud-computing">
                                <p>Cloud Computing</p>
                                <div id="awslogo"><FaAws color="#FF9900" size="200" /></div>
                                <div id="azurelogo"><SiMicrosoftazure color="#33BBEF" size="200" /></div>
                            </div>
                        </div>
                        <p>As a developer, I have a wide range of technical skills and expertise. Some of my key skills include:</p>
                        <ul>
                            <li>Web development: Experienced in building front-end web applications using technologies such as HTML, CSS, JavaScript, and React. This experience is not just limited to front-end web development, but I have also looked into back-end and API development using C#, .NET Core, and NodeJS.</li>
                            <li>Databases: Proficient in working with various database systems, including T-SQL, PostgreSQL, MongoDB, and DynamoDB.</li>
                            <li>Cloud computing: Experienced in building, deploying, and managing applications on cloud platforms such as AWS and Azure.</li>
                            <li>Testing and debugging: Skilled in testing and debugging software to ensure it is of high quality and performs well.</li>
                        </ul>
                        <p>I am always looking to learn and expand my skillset. In my free time, I enjoy exploring new technologies and programming languages,
                            and working on personal projects to stay up-to-date with the latest developments in the software industry.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Skills;