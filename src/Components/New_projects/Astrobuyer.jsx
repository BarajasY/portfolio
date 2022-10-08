import React, { useState } from 'react';
import './Projects.css';
import astrobuyer from '../../assets/astrobuyer_logo.png';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaCss3, FaHtml5 } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { IoLogoJavascript } from 'react-icons/io';
import { SiFirebase } from 'react-icons/si';

const Astrobuyer = () => {
    const [Open, setOpen] = useState(false)

    return (
        <div className="project_content">
            <img src={astrobuyer} alt={astrobuyer} onClick={() => setOpen(!Open)} />
            <AnimatePresence>
                {Open
                    ?
                    <motion.div key="project_info" exit={{ x: 2000 }} initial={{ x: 2000 }} animate={{ x: 0 }} transition={{ duration: .8 }} className="project_info">
                        <AiOutlineClose className="arrow" onClick={() => setOpen(!Open)} />
                        <div className="project_header">
                            <h1>Astrobuyer website</h1>
                        </div>
                        <div className="project_description">
                            <p>In this site you can login and simulate that you're buying some planets or stars. Even you can add them to your cart!.</p>
                            <p>I made this site in order to grasp more experience into databases and how to connect them with my react frontend.</p>
                            <p>Additionally thanks to this project i realized how strong the react context hook is.</p>
                        </div>
                        <div className="project_stack">
                            <p>I used the following tech stack in this project:</p>
                            <div className="section">
                                <FaReact className="icons" />
                                <FaCss3 className="icons" />
                                <FaHtml5 className="icons" />
                                <IoLogoJavascript className="icons" />
                                <SiFirebase className="icons" />
                            </div>
                        </div>
                        <div className="project_links">
                            <a href="https://astrobuyer.netlify.app" target='_blank' rel='noreferrer'><button>Live</button></a>
                            <a href="https://github.com/Kanomb/astrobuyer" target='_blank' rel='noreferrer'><button>Repo</button></a>
                        </div>
                    </motion.div>
                    :
                    <></>
                }
            </AnimatePresence>
        </div>
    )
}

export default Astrobuyer