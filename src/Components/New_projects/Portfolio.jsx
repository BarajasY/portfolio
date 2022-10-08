import React, { useState } from 'react';
import './Projects.css';
import portfolio from '../../assets/portfolio_logo.png';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaCss3, FaHtml5 } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { IoLogoJavascript } from 'react-icons/io';

const Portfolio = () => {
    const [Open, setOpen] = useState(false)

    return (
        <div className="project_content">
            <img src={portfolio} alt={portfolio} onClick={() => setOpen(!Open)} />
            <AnimatePresence>
                {Open
                    ?
                    <motion.div key="project_info" exit={{ x: 2000 }} initial={{ x: 2000 }} animate={{ x: 0 }} transition={{ duration: .8, type: 'spring' }} className="project_info">
                        <AiOutlineClose className="arrow" onClick={() => setOpen(!Open)} />
                        <div className="project_header">
                            <h1>Personal Portfolio</h1>
                        </div>
                        <div className="project_description">
                            <p>The website you're in currently!. Made this site to serve as a collection of all the things i've done and also to display my learning progress as a developer.</p>
                            <p>This project has evolved a lot since i started it.</p>
                        </div>
                        <div className="project_stack">
                            <p>I used the following tech stack in this project:</p>
                            <div className="section">
                                <FaReact className="icons" />
                                <FaCss3 className="icons" />
                                <FaHtml5 className="icons" />
                                <IoLogoJavascript className="icons" />
                            </div>
                        </div>
                        <div className="project_links">
                            <a href="https://yahirmb-portfolio.netlify.app/" target='_blank' rel='noreferrer'><button>Live</button></a>
                            <a href="https://github.com/Kanomb/portfolio" target='_blank' rel='noreferrer'><button>Repo</button></a>
                        </div>
                    </motion.div>
                    :
                    <></>
                }
            </AnimatePresence>
        </div>
    )
}

export default Portfolio