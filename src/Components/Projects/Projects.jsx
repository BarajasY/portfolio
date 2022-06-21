import React from 'react';
import './Projects.css';
import elantra_mockup from '../../assets/elantra_mockup.PNG';
import RAM_API from '../../assets/RAM_API.PNG';
import { FaReact, FaCss3, FaHtml5, FaBootstrap } from 'react-icons/fa';
import { AiFillApi } from 'react-icons/ai'

const Projects = () => {
    return (
        <div className="projects_container">
            <div className="projects_header">
                <h1>Projects</h1>
            </div>
            <div className="projects">
                <div className="test_project">
                    <img src={elantra_mockup} alt="elantra" className="image" />
                    <div className="buttons">
                        <a href="https://elantra-mockup2.netlify.app/" target="_blank" rel="noreferrer"><button className="page_buttons">See Live</button></a>
                        <a href="https://github.com/Kanomb/elantra" target="_blank" rel="noreferrer"><button className="page_buttons">Source code</button></a>
                    </div>
                    <div className="project_title">
                        <h1>Elantra webpage mockup</h1>
                    </div>
                    <div className="project_description">
                        <div className="description_text">
                            <p>My first ever static webpage containing details of the Hyundai Elantra 2022.</p>
                            <p>For this project i used:</p>
                            <li>Bootstrap to implement a carousel with text to scroll through different elantra images with inspiring quotes.</li>
                            <li>React, CSS and HTML.</li>
                            <li>Usage of the useState react hook along with the react-scroll library.</li>
                        </div>
                        <div className="description_icons">
                            <FaReact className="icon" />
                            <FaCss3 className="icon" />
                            <FaHtml5 className="icon" />
                            <FaBootstrap className="icon" />
                        </div>
                    </div>
                </div>
                <div className="test_project">
                    <img src={RAM_API} alt="elantra" className="image" />
                    <div className="buttons">
                        <a href="https://rickandmortyapi-test.netlify.app/" target="_blank" rel="noreferrer"><button className="page_buttons">See Live</button></a>
                        <a href="https://github.com/Kanomb/api_101" target="_blank" rel="noreferrer"><button className="page_buttons">Source code</button></a>
                    </div>
                    <div className="project_title">
                        <h1>Rick and Morty API</h1>
                    </div>
                    <div className="project_description">
                        <div className="description_text">
                            <p>React website i made to get knowledge of APIS, in this case i used the public Rick and Morty API.</p>
                            <p>For this project i used:</p>
                            <li>React, CSS and HTML.</li>
                            <li>useState and useEffect react hooks to fetch information from the respective URLs.</li>
                            <li>Implementation of simple pagination to fetch more characters from the API.</li>
                            <li>Naturally i used API implementation practices to fetch information from the API.</li>
                        </div>
                        <div className="description_icons">
                            <FaReact className="icon" />
                            <FaCss3 className="icon" />
                            <FaHtml5 className="icon" />
                            <AiFillApi className="icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects