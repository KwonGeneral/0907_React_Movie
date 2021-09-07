import React from "react";
import './About.css'

function About(props) {
    console.log(props)
    return (
        <div className="about__container">
            <span>
                영화 평가 웹사이트
            </span>

            <span>
                - 2021.09.07 Kwonputer
            </span>
        </div>
    )
}

export default About;