import React from 'react'
import './Projects.css';
import elantra_mockup from '../../assets/elantra_mockup.PNG';
import { FaReact, FaCss3, FaHtml5, FaBootstrap } from 'react-icons/fa';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

const Elantra = () => {

    const MySwal = withReactContent(Swal)

    const ShowSwal = () => {
        MySwal.fire(
            <div className="alert_text">
                <p>My first ever static webpage that displays the new 2022 Elantra. It has has images of the elantra and the description of each version of it.</p>
                <p>Probably the project that made me begin my react career.</p>
                <div className="icons_section">
                    <p>Tech used</p>
                    <FaReact className="icons" />
                    <FaCss3 className="icons" />
                    <FaHtml5 className="icons" />
                    <FaBootstrap className="icons" />
                </div>
            </div>)
    }

    return (
        <div className="test_project" onClick={ShowSwal}>
            <div className="project_title">
                <h1>Elantra webpage mockup</h1>
                <p>80% Responsive</p>
            </div>
            <img src={elantra_mockup} alt="elantra" className="image" />
            <div className="buttons">
                <a href="https://elantra-mockup2.netlify.app/" target="_blank" rel="noreferrer"><button className="page_buttons">See Live</button></a>
                <a href="https://github.com/Kanomb/elantra" target="_blank" rel="noreferrer"><button className="page_buttons">Source code</button></a>
            </div>
        </div>
    )
}

export default Elantra