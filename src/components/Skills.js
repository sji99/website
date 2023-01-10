import React from "react";
import Nav from "./Nav"
import "./CSS/content.css"

const Skills = () => (
    <div>
        <Nav />
        <div className="container">
            <div>
                <div className="page_title">
                    <h1>Skills</h1>
                </div>
            </div>
            <div className="content">
                <p>As a developer, I have a wide range of technical skills and expertise. Some of my key skills include:</p>
                <ul>
                    <li>Web development: Experienced in building web applications using technologies such as HTML, CSS, JavaScript, and React.</li>
                    <li>Databases: Proficient in working with various database systems, including MySQL, Oracle, and MongoDB.</li>
                    <li>Cloud computing: Experienced in building, deploying, and managing applications on cloud platforms such as AWS and Azure.</li>
                    <li>Testing and debugging: Skilled in testing and debugging software to ensure it is of high quality and performs well.</li>
                </ul>
                <p>I am always looking to learn and expand my skillset. In my free time, I enjoy exploring new technologies and programming languages,
                    and working on personal projects to stay up-to-date with the latest developments in the software industry.</p>
                <h1></h1>
                <ul>
                    <li>Programming languages: Proficient in multiple programming languages, including Java, Python, C++, and C#.</li>
                </ul>
            </div>
        </div>
    </div>
    
)

export default Skills;