import React from 'react'
import './Projects.css';
import { FaReact, FaCss3, FaHtml5 } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiFirebase } from 'react-icons/si';
import quiz from '../../assets/Quiz.PNG'

const Quiz = () => {
    return (
        <div className="test_project" >
            <img src={quiz} alt="portfolio" className="image" />
            <div className="buttons">
                <a href="https://yahirmb-quiz.netlify.app/" target="_blank" rel="noreferrer"><button className="page_buttons">See Live</button></a>
                <a href="https://github.com/Kanomb/programming-quiz" target="_blank" rel="noreferrer"><button className="page_buttons">Source code</button></a>
            </div>
            <div className="project_title">
                <h1>React/Javascript Quiz</h1>
                <p>100% Responsive</p>
            </div>
            <div className="project_description">
                <div className="description_text">
                    <p>This is a single-page application where a series of questions will be shown. At the end there is a results page.</p>
                    <p>For this project i used:</p>
                    <li>React, Javascript, CSS and HTML.</li>
                    <li>React hooks such as useState and useEffect.</li>
                    <li>Firebase database to hold all the questions.</li>
                </div>
                <div className="description_icons">
                    <FaReact className="icon" />
                    <FaCss3 className="icon" />
                    <FaHtml5 className="icon" />
                    <IoLogoJavascript className="icon" />
                    <SiFirebase className="icon" />
                </div>
            </div>
        </div>
    )
}

export default Quiz