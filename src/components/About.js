import React from "react";
import Nav from "./Nav"
import Header from "./Header"
import "./CSS/content.css"

const text = "Hello and welcome to my about page!\n\n\
My name is Sean and I am a Developer with one year of experience in the Software Development field. I have a strong background in computer science and have graduated from the University of Technology Sydney with a Bachelors Degree. I have a strong passion for creating innovative and user-friendly software as well as learning new technologies and programming concepts.\n\n\
I have worked on a variety of projects throughout my career which includes my time studying at university, ranging from small websites to large, enterprise-level applications. I have experience with a wide range of programming languages and frameworks, including Python, Java, and React. For more information about my skills feel free to look at my Skills tab in the navigation bar.\n\n\
In my previous role, I was responsible for designing, developing, and maintaining software applications for Unicard Systems. I worked closely with a team of developers and product managers to deliver high-quality products that meet the needs of our customers.\n\n\
Outside of work, I enjoy staying up-to-date with the latest trends and developments in the software industry. I also enjoy participating in hackathons and other programming events to hone my skills and meet other professionals in the field.\n\n\
Thank you for visiting my about page. I hope you have learned a little bit more about me and my background as a developer. If you have any questions or would like to learn more, please don't hesitate to reach out.";


const About = () => (
    <div>
        <Nav/>
        <div className="container">
            <div>
                <div className="page_title">
                    <h1>About</h1>
                </div>
            </div>
            <div className="content">
                <p>{text}</p>
            </div>
        </div>
    </div>
    
)

export default About;