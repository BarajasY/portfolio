import React from 'react';
import './Projects.css';
import weird_calc from '../../assets/weird_calculator.PNG';
import { FaReact, FaCss3, FaHtml5 } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';

const Weird_calc = () => {
    return (
        <div className="test_project" >
            <div className="project_header">
                <div className="project_title">
                    <h1>Weird Calculators</h1>
                    <p>100% Responsive</p>
                </div>
                <div className="project_description">
                    <p>A single page application about some calculators!</p>
                    <p>I was messing around in Wikipedia when i found these kind of numbers, the narcissistic and the Munchausen, which require some calculations to get.</p>
                    <p>So i decided to hop into VSC and make myself some calculators of those numbers. I will add more calculators to this site in the near future!</p>
                    <div className="icons_section">
                        <FaReact className="icons" />
                        <FaCss3 className="icons" />
                        <FaHtml5 className="icons" />
                        <IoLogoJavascript className="icons" />
                    </div>
                </div>
            </div>
            <div>
                <img src={weird_calc} alt="elantra" />
            </div>
            <div className="buttons">
                <a href="https://yahirmb-calc.netlify.app" target="_blank" rel="noreferrer"><button className="page_buttons" >See Live</button></a>
                <a href="https://github.com/Kanomb/calculators" target="_blank" rel="noreferrer"><button className="page_buttons" >Code</button></a>
            </div>
        </div>
    )
}

export default Weird_calc