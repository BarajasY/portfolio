import React, { useState } from 'react';
import './Projects.css';
import hyundai from '../../assets/hyundai_logo.png';
import elantra from '../../assets/elantra_mockup.webp';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaCss3, FaHtml5, FaBootstrap } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const Elantra = () => {
    const [Open, setOpen] = useState(false)

    return (
        <div className="project_content">
            <img src={hyundai} alt={hyundai} onClick={() => setOpen(!Open)} id='logo' />
            <AnimatePresence>
                {Open
                    ?
                    <motion.div key="project_info" exit={{ x: 2000 }} initial={{ x: 2000 }} animate={{ x: 0 }} transition={{ duration: .5 }} className="project_info">
                        <AiOutlineClose className="arrow" onClick={() => setOpen(!Open)} />
                        <div className="project_header">
                            <h1>Hyundai Elantra Mockup</h1>
                            <img src={elantra} alt={elantra} id='screenshot' />
                        </div>
                        <div className="project_description">
                            <p>My first ever static webpage that displays the new 2022 Elantra. It has images of the elantra and the description of each version of it.
                                This is the project that started my career as a React developer.</p>
                        </div>
                        <div className="project_stack">
                            <div className="section">
                                <FaReact className="icons" />
                                <FaCss3 className="icons" />
                                <FaHtml5 className="icons" />
                                <FaBootstrap className="icons" />
                            </div>
                        </div>
                        <div className="project_links">
                            <a href="https://elantra-mockup2.netlify.app/" target='_blank' rel='noreferrer'><button>Live</button></a>
                            <a href="https://github.com/Kanomb/elantra" target='_blank' rel='noreferrer'><button>Repo</button></a>
                        </div>
                    </motion.div>
                    :
                    <></>
                }
            </AnimatePresence>
        </div>
    )
}

export default Elantra