import React from 'react'
import './Projects.css';
import portfolio_page from '../../assets/portfolio_page.PNG';
import { FaReact, FaCss3, FaHtml5 } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

const Portfolio = () => {

    const MySwal = withReactContent(Swal)

    const ShowSwal = () => {
        MySwal.fire(
            <div className="alert_text">
                <p>The website you're in currently!. Made this site to serve as a collection of all the things i've done and also to display my learning progress as a developer.</p>
                <p>This project has evolved a lot since i started it.</p>
                <div className="icons_section">
                    <p>Tech used</p>
                    <FaReact className="icons" />
                    <FaCss3 className="icons" />
                    <FaHtml5 className="icons" />
                    <IoLogoJavascript className="icons" />
                </div>
            </div>)
    }

    return (
        <div className="test_project" onClick={ShowSwal}>
            <div className="project_title">
                <h1>Personal Portfolio</h1>
                <p>95% Responsive</p>
            </div>
            <img src={portfolio_page} alt="portfolio" className="image" />
            <div className="buttons">
                <a href="https://yahirmb-portfolio.netlify.app/" target="_blank" rel="noreferrer"><button className="page_buttons">See Live</button></a>
                <a href="https://github.com/Kanomb/portfolio" target="_blank" rel="noreferrer"><button className="page_buttons">Source code</button></a>
            </div>
        </div>
    )
}

export default Portfolio