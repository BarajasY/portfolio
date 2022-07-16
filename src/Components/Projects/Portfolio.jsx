import React from 'react'
import './Projects.css';
import portfolio_page from '../../assets/portfolio_page.PNG';
import { FaReact, FaCss3, FaHtml5 } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';


const Portfolio = () => {
    return (
        <div className="test_project" >
            <img src={portfolio_page} alt="portfolio" className="image" />
            <div className="buttons">
                <a href="https://yahirmb-portfolio.netlify.app/" target="_blank" rel="noreferrer"><button className="page_buttons">See Live</button></a>
                <a href="https://github.com/Kanomb/portfolio" target="_blank" rel="noreferrer"><button className="page_buttons">Source code</button></a>
            </div>
            <div className="project_title">
                <h1>Personal Portfolio</h1>
                <p>95% Responsive</p>
            </div>
            <div className="project_description">
                <div className="description_text">
                    <p>My personal portfolio that i update when i make a new project.</p>
                    <p>For this project i use:</p>
                    <li>React, Javascript, CSS and HTML.</li>
                    <li>React hooks such as useState and useEffect.</li>
                    <li>React libraries such as react-scroll, react-typed and react-icons</li>
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

export default Portfolio