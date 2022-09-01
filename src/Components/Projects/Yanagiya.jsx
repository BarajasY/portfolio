import React from 'react'
import './Projects.css';
import yanagiya_page from '../../assets/yanagiya_page.PNG';
import { FaReact, FaCss3, FaHtml5 } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { motion } from 'framer-motion'

const Yanagiya = () => {

    return (
        <div className="test_project">
            <div className="project_header">
                <div className="project_title">
                    <h1>Yanagiya.mx Clone Website</h1>
                    <p>100% Responsive</p>
                </div>
                <div className="project_description">
                    <p>My first ever clone website!. In this case we're talking about the Yanagiya.mx. Probably this project helped me better visualize how much work a real-life project can have.</p>
                    <div className="icons_section">
                        <FaReact className="icons" />
                        <FaCss3 className="icons" />
                        <FaHtml5 className="icons" />
                        <IoLogoJavascript className="icons" />
                    </div>
                </div>
            </div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 2 }}>
                <img src={yanagiya_page} alt="portfolio" />
            </motion.div>
            <div className="buttons">
                <a href="https://yanagiya-clone.netlify.app" target="_blank" rel="noreferrer"><button className="page_buttons" style={{ borderRadius: '0px 0px 0px 40px' }}>See Live</button></a>
                <a href="https://github.com/Kanomb/yanagiya-clone" target="_blank" rel="noreferrer"><button className="page_buttons" style={{ borderRadius: '0px 40px 0px 0px' }}>Code</button></a>
            </div>
        </div>
    )
}

export default Yanagiya