import React from 'react'
import './Projects.css';
import RAM_API from '../../assets/RAM_API.PNG';
import { FaReact, FaCss3, FaHtml5 } from 'react-icons/fa';
import { AiFillApi } from 'react-icons/ai'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

const Rick = () => {

    const MySwal = withReactContent(Swal)

    const ShowSwal = () => {
        MySwal.fire(
            <div className="alert_text">
                <p>My first attempt to use an API!. In this case i used the Rick and Morty API. It allows the user to see the characters from the show and an additional description of them.</p>
                <p>This projected allowed me to better understand how JSX works.</p>
                <div className="icons_section">
                    <p>Tech used</p>
                    <FaReact className="icons" />
                    <FaCss3 className="icons" />
                    <FaHtml5 className="icons" />
                    <AiFillApi className="icons" />
                </div>
            </div>)
    }

    return (
        <div className="test_project">
            <div className="project_title">
                <h1>Rick and Morty API</h1>
                <p>100% Responsive</p>
            </div>
            <img src={RAM_API} alt="Rick_morty" className="image" onClick={ShowSwal} />
            <div className="buttons">
                <a href="https://rickandmortyapi-test.netlify.app/" target="_blank" rel="noreferrer"><button className="page_buttons">See Live</button></a>
                <a href="https://github.com/Kanomb/api_101" target="_blank" rel="noreferrer"><button className="page_buttons">Source code</button></a>
            </div>
        </div>
    )
}

export default Rick