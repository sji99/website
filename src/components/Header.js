import React, { useEffect, useState } from "react";
import "./CSS/header.css"
import img1 from "./images/img1.jpg"
import img2 from "./images/img2.jpg"
import img3 from "./images/img3.jpg"

const images = [{ image: img1 }, { image: img2 }, { image: img3 }]


function Header({ Title }) {
    const [current, setCurrent] = useState(isNaN(parseInt(localStorage.getItem('current'))) ? 0 : parseInt(localStorage.getItem('current')));
    const length = images.length

    useEffect(() => {
        localStorage.setItem('current', JSON.stringify(current))
    }, [current]);

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(images) || images.length <= 0) {
        setCurrent(0);
        // return null;
    }

    return (
        <div>
            <div className="header">
                <div className="slideshowSlider">
                    {images.map((slide, index) => {
                        return (
                            <div className={index === current ? 'slide active' : 'slide'}
                                key={index}>
                                {index === current && (
                                    <img src={slide.image} width="100%" />
                                )}
                            </div>
                        )
                    })}
                </div>
                <a className="prev" onClick={prevSlide}>&#10094;</a>
                <a className="next" onClick={nextSlide}>&#10095;</a>
                <h1 className="centered">{Title}</h1>
            </div>
        </div>
    )
}

export default Header;