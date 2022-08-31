import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion';
import { FaReact, FaCss3, FaHtml5 } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiExpress, SiPostgresql } from 'react-icons/si';
import pokechampions from '../../assets/pokechamp.PNG'

const Pokechampions = () => {
    return (
        <div className="test_project" >
            <div className="project_header">
                <div className="project_title">
                    <h1>Pokechampions website</h1>
                    <p>100% Responsive</p>
                </div>
                <div className="project_description">
                    <p>A full stack application about the pokemon champions!</p>
                    <p>I made this application using Express as the backend, PostgreSQL as the database and React serving as the frontend.</p>
                    <p>Additionally i must say that the backend/database for this application is hosted in Heroku, while the frontend is hosted in Netlify.</p>
                    <div className="icons_section">
                        <FaReact className="icons" />
                        <FaCss3 className="icons" />
                        <FaHtml5 className="icons" />
                        <IoLogoJavascript className="icons" />
                        <SiExpress className="icons" />
                        <SiPostgresql className="icons" />
                    </div>
                </div>
            </div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 2 }}>
                <img src={pokechampions} alt="elantra" />
            </motion.div>
            <div className="buttons">
                <a href="https://yahirmb-trainers-frontend.netlify.app/" target="_blank" rel="noreferrer"><button className="page_buttons" style={{ borderRadius: '0px 0px 0px 40px' }}>See Live</button></a>
                <a href="https://github.com/Kanomb/trainer-frontend" target="_blank" rel="noreferrer"><button className="page_buttons" style={{ borderRadius: '0px 40px 0px 0px' }}>Source code</button></a>
            </div>
        </div>
    )
}

export default Pokechampions