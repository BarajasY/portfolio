import React from 'react'
import './Projects.css';
import { FaReact, FaCss3, FaHtml5 } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiFirebase } from 'react-icons/si';
import quiz from '../../assets/Quiz.PNG'
import { motion } from 'framer-motion';

const Quiz = () => {

    return (
        <div className="test_project">
            <div className="project_header">
                <div className="project_title">
                    <h1>React/Javascript Quiz</h1>
                    <p>100% Responsive</p>
                </div>
                <div className="project_description">
                    <p>A quiz app where React/Javascript related questions will be shown to the user. This project allowed me to really understand how some react hooks work, such as UseEffect and useState. Additionally i learned React theory.</p>
                    <div className="icons_section">
                        <FaReact className="icons" />
                        <FaCss3 className="icons" />
                        <FaHtml5 className="icons" />
                        <IoLogoJavascript className="icons" />
                        <SiFirebase className="icons" />
                    </div>
                </div>
            </div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 2 }}>
                <img src={quiz} alt="portfolio" className="image" />
            </motion.div>
            <div className="buttons">
                <a href="https://yahirmb-quiz.netlify.app/" target="_blank" rel="noreferrer"><button className="page_buttons" style={{ borderRadius: '0px 0px 0px 40px' }}>See Live</button></a>
                <a href="https://github.com/Kanomb/programming-quiz" target="_blank" rel="noreferrer"><button className="page_buttons" style={{ borderRadius: '0px 40px 0px 0px' }}>Source code</button></a>
            </div>
        </div>
    )
}

export default Quiz