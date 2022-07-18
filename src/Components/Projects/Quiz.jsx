import React from 'react'
import './Projects.css';
import { FaReact, FaCss3, FaHtml5 } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiFirebase } from 'react-icons/si';
import quiz from '../../assets/Quiz.PNG'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

const Quiz = () => {

    const MySwal = withReactContent(Swal)

    const ShowSwal = () => {
        MySwal.fire(
            <div className="alert_text">
                <p>A quiz app where React/Javascript related questions will be shown to the user. This project allowed me to really understand how some react hooks work, such as UseEffect and useState. Additionally i learned React theory.</p>
                <div className="icons_section">
                    <p>Tech used</p>
                    <FaReact className="icons" />
                    <FaCss3 className="icons" />
                    <FaHtml5 className="icons" />
                    <IoLogoJavascript className="icons" />
                    <SiFirebase className="icons" />
                </div>
            </div>)
    }

    return (
        <div className="test_project" onClick={ShowSwal}>
            <div className="project_title">
                <h1>React/Javascript Quiz</h1>
                <p>100% Responsive</p>
            </div>
            <img src={quiz} alt="portfolio" className="image" />
            <div className="buttons">
                <a href="https://yahirmb-quiz.netlify.app/" target="_blank" rel="noreferrer"><button className="page_buttons">See Live</button></a>
                <a href="https://github.com/Kanomb/programming-quiz" target="_blank" rel="noreferrer"><button className="page_buttons">Source code</button></a>
            </div>
        </div>
    )
}

export default Quiz