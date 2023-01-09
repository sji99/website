import React, { useEffect, useState } from "react";
import "./CSS/header.css"
import img1 from "./images/img1.jpg"
import img2 from "./images/img2.jpg"
import img3 from "./images/img3.jpg"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'




function Header({ Title }) {
    return (
        <div>
            <div className="header">
                <h1 className="centered">{Title}</h1>
            </div>
        </div>
    )
}

export default Header;