import React from 'react'
import './Projects.css';
import portfolio_page from '../../assets/portfolio.PNG';
import { FaReact, FaCss3, FaHtml5 } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { motion } from 'framer-motion'

const Portfolio = () => {

    return (
        <div className="test_project" >
            <div className="project_header">
                <div className="project_title">
                    <h1>Personal Portfolio</h1>
                    <p>100% Responsive</p>
                </div>
                <div className="project_description">
                    <p>The website you're in currently!. Made this site to serve as a collection of all the things i've done and also to display my learning progress as a developer.</p>
                    <p>This project has evolved a lot since i started it.</p>
                    <div className="icons_section">
                        <FaReact className="icons" />
                        <FaCss3 className="icons" />
                        <FaHtml5 className="icons" />
                        <IoLogoJavascript className="icons" />
                    </div>
                </div>
            </div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 2 }}>
                <img src={portfolio_page} alt="portfolio" />
            </motion.div>
            <div className="buttons">
                <a href="https://yahirmb-portfolio.netlify.app/" target="_blank" rel="noreferrer"><button className="page_buttons" style={{ borderRadius: '0px 0px 0px 40px' }}>See Live</button></a>
                <a href="https://github.com/Kanomb/portfolio" target="_blank" rel="noreferrer"><button className="page_buttons" style={{ borderRadius: '0px 40px 0px 0px' }}>Code</button></a>
            </div>
        </div >
    )
}

export default Portfolio