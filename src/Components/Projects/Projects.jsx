import React from 'react';
import './Projects.css';
import elantra_page from '../../assets/elantra_page_resized.PNG'

const Projects = () => {
    return (
        <div className="projects_container">
            <div className="project">
                <h1>Projects</h1>
                <div className="test_project">
                    <img src={elantra_page} alt="elantra" />
                </div>
            </div>
        </div>
    )
}

export default Projects