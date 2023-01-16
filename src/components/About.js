import React from "react";
import Nav from "./Nav"
import person from "./images/sean.jpg"
import "./CSS/content.css"

const text = "My name is Sean, and I am a software developer with a passion for creating innovative and user-friendly applications. With one year of experience in the field and a strong background in computer science, I have the skills and knowledge to tackle a wide range of projects.\n\n\
I graduated with a Bachelors Degree in Computer Science from the University of Technology Sydney in August 2022, where I gained a solid foundation in programming and problem-solving. Throughout my studies and work experience, I have had the opportunity to work on a variety of projects, from small websites to large, enterprise-level applications. I have experience with a range of programming languages and frameworks, and I am always eager to learn new technologies and concepts.\n\n\
In my previous role as a developer at Unicard Systems, I was responsible for designing, developing, and maintaining software applications. Working closely with a team of developers and product managers, I helped deliver high-quality products that met the needs of our customers.\n\n\
Outside of work, I am committed to personal growth and self-improvement. I enjoy going to the gym, practicing muay thai and boxing, and playing guitar in my free time.\n\n\
If you have any questions or would like to learn more about my background and experience as a software developer, please don't hesitate to reach out.";


const About = () => (
    <div>
        <section id="about">
            <div className="container">
                <div>
                    <div className="page_title">
                        <h1>About</h1>
                    </div>
                </div>
                <div className="image-content">
                    <div>
                        <img id="portrait" src={person}></img>
                    </div>
                    <div>
                        <p className="side-text">{text}</p>
                    </div>
                </div>
            </div>
        </section>
    </div>

)

export default About;