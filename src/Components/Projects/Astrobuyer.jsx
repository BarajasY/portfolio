import React from 'react'
import './Projects.css';
import astrobuyer_page from '../../assets/astrobuyer_page.PNG'
import { FaReact, FaCss3, FaHtml5 } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiFirebase } from 'react-icons/si';
import { motion } from 'framer-motion';


const Astrobuyer = () => {

    return (
        <div className="test_project">
            <div className="project_header">
                <div className="project_title">
                    <h1>Astrobuyer website</h1>
                    <p>100% Responsive</p>
                </div>
                <div className="project_description">
                    <p>In this site you can login and simulate that you're buying some planets or stars. Even you can add them to your cart!.</p>
                    <p>I made this site in order to grasp more experience into databases and how to connect them with my react frontend.</p>
                    <p>Additionally thanks to this project i realized how strong the react context hook is.</p>
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
                <img src={astrobuyer_page} alt="astrobuyer page" />
            </motion.div>
            <div className="buttons">
                <a href="https://astrobuyer.netlify.app" target="_blank" rel="noreferrer"><button className="page_buttons">See Live</button></a>
                <a href="https://github.com/Kanomb/astrobuyer" target="_blank" rel="noreferrer"><button className="page_buttons">Source code</button></a>
            </div>
        </div>
    )
}

export default Astrobuyer