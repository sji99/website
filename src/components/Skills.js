import React from "react";
import Nav from "./Nav"
import "./CSS/content.css"

const Skills = () => (
    <div>
        <section id="skills">
            <div className="container">
                <div>
                    <div className="page_title">
                        <h1>Skills</h1>
                    </div>
                </div>
                <div className="content">
                    <p>As a developer, I have a wide range of technical skills and expertise. Some of my key skills include:</p>
                    <ul>
                        <li>Web development: Experienced in building front-end web applications using technologies such as HTML, CSS, JavaScript, and React. This experience is not just limited to front-end web development, but I have also looked into back-end development using C#, .NET Core, and NodeJS.</li>
                        <li>Databases: Proficient in working with various database systems, including T-SQL, PostgreSQL, MongoDB, and DynamoDB.</li>
                        <li>Cloud computing: Experienced in building, deploying, and managing applications on cloud platforms such as AWS and Azure.</li>
                        <li>Testing and debugging: Skilled in testing and debugging software to ensure it is of high quality and performs well.</li>
                    </ul>
                    <p>I am always looking to learn and expand my skillset. In my free time, I enjoy exploring new technologies and programming languages,
                        and working on personal projects to stay up-to-date with the latest developments in the software industry.</p>
                    <h1>Programming Languages</h1>
                    <div className="centre-container">
                        <div className="language-framework">
                            <div><i className="devicon-java-plain colored p-icon" />Java</div>
                            <div><i className="devicon-python-plain colored p-icon" />Python</div>
                            <div><i className="devicon-javascript-plain colored p-icon" />JavaScript</div>
                            <div><i className="devicon-csharp-plain colored p-icon" />C#</div>
                            <div><i className="devicon-swift-plain colored p-icon" />Swift</div>
                            <div><i className="devicon-html5-plain-wordmark colored p-icon" />HTML</div>
                            <div><i className="devicon-css3-plain-wordmark colored p-icon" />CSS</div>
                            <div><i className="devicon-microsoftsqlserver-plain-wordmark colored p-icon" />SQL</div>
                        </div>
                    </div>
                    <h1>Framework & Platforms</h1>
                    <div className="centre-container">
                        <div className="language-framework">
                            <div><i className="devicon-dotnetcore-plain colored p-icon" />.NET Core</div>
                            <div><i className="devicon-react-original-wordmark colored p-icon" />ReactJS</div>
                            <div><i className="devicon-nodejs-plain colored p-icon" />NodeJS</div>
                            <div><i className="devicon-gradle-plain-wordmark colored p-icon" />Gradle</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
)

export default Skills;