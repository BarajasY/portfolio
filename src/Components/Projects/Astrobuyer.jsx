import React from 'react'
import './Projects.css';
import astrobuyer_page from '../../assets/astrobuyer_page.PNG'
import { FaReact, FaCss3, FaHtml5 } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiFirebase } from 'react-icons/si';


const Astrobuyer = () => {
    return (
        <div className="test_project" >
            <img src={astrobuyer_page} alt="astrobuyer page" className="image" />
            <div className="buttons">
                <a href="https://astrobuyer.netlify.app" target="_blank" rel="noreferrer"><button className="page_buttons">See Live</button></a>
                <a href="https://github.com/Kanomb/astrobuyer" target="_blank" rel="noreferrer"><button className="page_buttons">Source code</button></a>
            </div>
            <div className="project_title">
                <h1>Astrobuyer website</h1>
                <p>100% Responsive</p>
            </div>
            <div className="project_description">
                <div className="description_text">
                    <p>Webpage where you can "buy" planets and take a look at their description. My first time simulating a store site!.</p>
                    <p>You can log in and simulate that you're buying some planets.</p>
                    <p>For this project i used:</p>
                    <li>React, Javascript, CSS and HTML.</li>
                    <li>Firebase auth to allow google sign up and firestore database to store all the planets/stars.</li>
                    <li>React Context to share information about the cart between the elements of the project.</li>
                    <li>React hooks such as useState and useEffect.</li>
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

export default Astrobuyer