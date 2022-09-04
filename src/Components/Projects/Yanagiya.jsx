import React from 'react'
import './Projects.css';
import yanagiya_page from '../../assets/yanagiya_page.PNG';
import { FaReact, FaCss3, FaHtml5 } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';

const Yanagiya = () => {

    return (
        <div className="test_project">
            <div className="project_header">
                <div className="project_title">
                    <h1>Yanagiya.mx Clone Website</h1>
                    <p>100% Responsive</p>
                </div>
                <div className="project_description">
                    <p>My first ever clone website!. In this case we're talking about the Yanagiya.mx. Probably this project helped me better visualize how much work a real-life project can have.</p>
                    <div className="icons_section">
                        <FaReact className="icons" />
                        <FaCss3 className="icons" />
                        <FaHtml5 className="icons" />
                        <IoLogoJavascript className="icons" />
                    </div>
                </div>
            </div>
            <div>
                <img src={yanagiya_page} alt="portfolio" />
            </div>
            <div className="buttons">
                <a href="https://yanagiya-clone.netlify.app" target="_blank" rel="noreferrer"><button className="page_buttons">See Live</button></a>
                <a href="https://github.com/Kanomb/yanagiya-clone" target="_blank" rel="noreferrer"><button className="page_buttons">Code</button></a>
            </div>
        </div>
    )
}

export default Yanagiya