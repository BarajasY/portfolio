import React from 'react'
import './Projects.css';
import RAM_API from '../../assets/RAM_API.PNG';
import { FaReact, FaCss3, FaHtml5 } from 'react-icons/fa';
import { AiFillApi } from 'react-icons/ai'

const Rick = () => {

    return (
        <div className="test_project">
            <div className="project_header">
                <div className="project_title">
                    <h1>Rick and Morty API</h1>
                    <p>100% Responsive</p>
                </div>
                <div className="project_description">
                    <p>My first attempt to use an API!. In this case i used the Rick and Morty API. It allows the user to see the characters from the show and an additional description of them.</p>
                    <p>This projected allowed me to better understand how JSX works.</p>
                    <div className="icons_section">
                        <FaReact className="icons" />
                        <FaCss3 className="icons" />
                        <FaHtml5 className="icons" />
                        <AiFillApi className="icons" />
                    </div>
                </div>
            </div>
            <div>
                <img src={RAM_API} alt="Rick_morty" />
            </div>
            <div className="buttons">
                <a href="https://rickandmortyapi-test.netlify.app/" target="_blank" rel="noreferrer"><button className="page_buttons" >See Live</button></a>
                <a href="https://github.com/Kanomb/api_101" target="_blank" rel="noreferrer"><button className="page_buttons" >Code</button></a>
            </div>
        </div>
    )
}

export default Rick