import React, { useState } from 'react';
import './Projects.css';
import pokechampions from '../../assets/pokechampions_logo.png';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaCss3, FaHtml5 } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { IoLogoJavascript } from 'react-icons/io';
import { SiExpress, SiPostgresql } from 'react-icons/si';

const Pokechampions = () => {
    const [Open, setOpen] = useState(false)

    return (
        <div className="project_content">
            <img src={pokechampions} alt={pokechampions} onClick={() => setOpen(!Open)} />
            <AnimatePresence>
                {Open
                    ?
                    <motion.div key="project_info" exit={{ x: 2000 }} initial={{ x: 2000 }} animate={{ x: 0 }} transition={{ duration: .8 }} className="project_info">
                        <AiOutlineClose className="arrow" onClick={() => setOpen(!Open)} />
                        <div className="project_header">
                            <h1>Pokechampions website</h1>
                        </div>
                        <div className="project_description">
                            <p>A full stack application about the pokemon champions!</p>
                            <p>I made this application using Express as the backend, PostgreSQL as the database and React serving as the frontend.</p>
                        </div>
                        <div className="project_stack">
                            <p>I used the following tech stack in this project:</p>
                            <div className="section">
                                <FaReact className="icons" />
                                <FaCss3 className="icons" />
                                <FaHtml5 className="icons" />
                                <IoLogoJavascript className="icons" />
                                <SiExpress className="icons" />
                                <SiPostgresql className="icons" />
                            </div>
                        </div>
                        <div className="project_links">
                            <a href="https://yahirmb-trainers-frontend.netlify.app/" target='_blank' rel='noreferrer'><button>Live</button></a>
                            <a href="https://github.com/Kanomb/trainer-frontend" target='_blank' rel='noreferrer'><button>Repo</button></a>
                        </div>
                    </motion.div>
                    :
                    <></>
                }
            </AnimatePresence>
        </div>
    )
}

export default Pokechampions