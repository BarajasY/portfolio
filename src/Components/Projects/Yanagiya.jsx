import React from 'react'
import './Projects.css';
import yanagiya_page from '../../assets/yanagiya_page.PNG';
import { FaReact, FaCss3, FaHtml5 } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';


const Yanagiya = () => {
    return (
        <div className="test_project" >
            <img src={yanagiya_page} alt="portfolio" className="image" />
            <div className="buttons">
                <a href="https://yanagiya-clone.netlify.app" target="_blank" rel="noreferrer"><button className="page_buttons">See Live</button></a>
                <a href="https://github.com/Kanomb/yanagiya-clone" target="_blank" rel="noreferrer"><button className="page_buttons">Source code</button></a>
            </div>
            <div className="project_title">
                <h1>Yanagiya.mx Clone Website</h1>
                <p>100% Responsive</p>
            </div>
            <div className="project_description">
                <div className="description_text">
                    <p>First "big" project i made, a clone website of Yanagiya. I feel that after this project i visualized the amount of work any page needs to function.</p>
                    <p>For this project i used:</p>
                    <li>React, Javascript, CSS and HTML.</li>
                    <li>React hooks such as useState and useEffect.</li>
                    <li>React Router library to asign routes to explore the website.</li>
                    <li>Other react libraries such as react-icons, react-player, react-img-zoom</li>
                </div>
                <div className="description_icons">
                    <FaReact className="icon" />
                    <FaCss3 className="icon" />
                    <FaHtml5 className="icon" />
                    <IoLogoJavascript className="icon" />
                </div>
            </div>
        </div>
    )
}

export default Yanagiya