import React, { useState, useEffect } from 'react';
import './Projects.css';
import elantra_mockup from '../../assets/elantra_mockup.PNG';
import RAM_API from '../../assets/RAM_API.PNG';
import portfolio_page from '../../assets/portfolio_page.PNG';
import yanagiya_page from '../../assets/yanagiya_page.PNG';
import blog_page from '../../assets/blog_page.PNG';
import { FaReact, FaCss3, FaHtml5, FaBootstrap } from 'react-icons/fa';
import { AiFillApi } from 'react-icons/ai'
import { IoLogoJavascript } from 'react-icons/io';
import { SiFirebase } from 'react-icons/si';

const Projects = () => {

    const [ProyectsMotion, setProyectsMotion] = useState(0)
    /*     const device_width = window.screen.width; */
    const handleMotion = () => {
        setProyectsMotion(window.scrollY);
    }

    useEffect(() => {
        document.addEventListener('scroll', handleMotion)


        return () => document.removeEventListener('scroll', handleMotion)
    }, [])


    return (
        <div className="projects_container">
            <div className="proyects_content" style={{ transform: `translateY(${-ProyectsMotion * .2}px)` }}>
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
                        <img src={RAM_API} alt="Rick_morty" className="image" />
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
                    <div className="test_project" >
                        <img src={portfolio_page} alt="portfolio" className="image" />
                        <div className="buttons">
                            <a href="https://yahirmb-portfolio.netlify.app/" target="_blank" rel="noreferrer"><button className="page_buttons">See Live</button></a>
                            <a href="https://github.com/Kanomb/portfolio" target="_blank" rel="noreferrer"><button className="page_buttons">Source code</button></a>
                        </div>
                        <div className="project_title">
                            <h1>Personal Portfolio</h1>
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
                    <div className="test_project" >
                        <img src={yanagiya_page} alt="portfolio" className="image" />
                        <div className="buttons">
                            <a href="https://yanagiya-clone.netlify.app" target="_blank" rel="noreferrer"><button className="page_buttons">See Live</button></a>
                            <a href="https://github.com/Kanomb/yanagiya-clone" target="_blank" rel="noreferrer"><button className="page_buttons">Source code</button></a>
                        </div>
                        <div className="project_title">
                            <h1>Yanagiya.mx Clone Website</h1>
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
                    <div className="test_project" >
                        <img src={blog_page} alt="portfolio" className="image" />
                        <div className="buttons">
                            <a href="https://yahirmb-blog.netlify.app" target="_blank" rel="noreferrer"><button className="page_buttons">See Live</button></a>
                            <a href="https://github.com/Kanomb/blog" target="_blank" rel="noreferrer"><button className="page_buttons">Source code</button></a>
                        </div>
                        <div className="project_title">
                            <h1>Blog website</h1>
                        </div>
                        <div className="project_description">
                            <div className="description_text">
                                <p>First project where i manage to use a database. In this case it is a classic blog webpage in which you can login and logout with google, create/delete posts and even edit them!</p>
                                <p>For this project i used:</p>
                                <li>React, Javascript, CSS and HTML.</li>
                                <li>Firebase to work as an authenticator and as a database.</li>
                                <li>React hooks such as useState and useEffect.</li>
                                <li>React libraries such as react-icons, react-router-dom.</li>
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
                </div>
            </div>
        </div >
    )
}

export default Projects