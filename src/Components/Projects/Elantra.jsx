import React from 'react'
import './Projects.css';
import elantra_mockup from '../../assets/elantra_mockup.PNG';
import { FaReact, FaCss3, FaHtml5, FaBootstrap } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Elantra = () => {

    return (
        <div className="test_project" >
            <div className="project_header">
                <div className="project_title">
                    <h1>Elantra webpage mockup</h1>
                    <p>80% Responsive</p>
                </div>
                <div className="project_description">
                    <p>My first ever static webpage that displays the new 2022 Elantra. It has images of the elantra and the description of each version of it.</p>
                    <p>This is the project that started my career as a React developer.</p>
                    <div className="icons_section">
                        <FaReact className="icons" />
                        <FaCss3 className="icons" />
                        <FaHtml5 className="icons" />
                        <FaBootstrap className="icons" />
                    </div>
                </div>
            </div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 2 }}>
                <img src={elantra_mockup} alt="elantra" />
            </motion.div>
            <div className="buttons">
                <a href="https://elantra-mockup2.netlify.app/" target="_blank" rel="noreferrer"><button className="page_buttons">See Live</button></a>
                <a href="https://github.com/Kanomb/elantra" target="_blank" rel="noreferrer"><button className="page_buttons">Source code</button></a>
            </div>
        </div>
    )
}

export default Elantra