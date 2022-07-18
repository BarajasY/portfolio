import React from 'react';
import './Projects.css';
import Astrobuyer from './Astrobuyer';
import Blog from './Blog';
import Elantra from './Elantra';
import Portfolio from './Portfolio';
import Rick from './Rick';
import Yanagiya from './Yanagiya';
import Quiz from './Quiz'

const Projects = () => {

    return (
        <div className="projects_container">
            <div className="proyects_content">
                <div className="projects_header">
                    <h1>Projects</h1>
                </div>
                <div className="projects">
                    <Elantra />
                    <Rick />
                    <Portfolio />
                    <Yanagiya />
                    <Blog />
                    <Astrobuyer />
                    <Quiz />
                </div>
            </div>
        </div >
    )
}

export default Projects