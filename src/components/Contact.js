import React from "react";
import Nav from "./Nav"
import "./CSS/content.css"

const text = "Yo!";


const Contact = () => (
    <div>
        <section id="contact">
            <div className="container">
                <div>
                    <div className="page_title">
                        <h1>Contact</h1>
                    </div>
                </div>
                <div className="content">
                    <p>{text}</p>
                </div>
            </div>
        </section>
    </div>
)

export default Contact;