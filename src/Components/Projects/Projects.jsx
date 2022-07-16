import React, { useState, useEffect } from 'react';
import './Projects.css';
import Astrobuyer from './Astrobuyer';
import Blog from './Blog';
import Elantra from './Elantra';
import Portfolio from './Portfolio';
import Rick from './Rick';
import Yanagiya from './Yanagiya';
import Quiz from './Quiz'

const Projects = () => {

    const [ProyectsMotion, setProyectsMotion] = useState(0)

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