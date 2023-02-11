import React, { useState } from 'react';
import '../Projects.css';
import togenim_logo from '../../../assets/togenim_logo.png';
import togenim_page from '../../../assets/togenim_page.webp';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaCss3, FaHtml5 } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { SiFirebase, SiTypescript } from 'react-icons/si';

const Togenim = () => {
    const [Open, setOpen] = useState(false)

    return (
        <motion.div className="project_content" initial={{y:10, opacity: 0}} whileInView={{y:0, opacity: 1}} transition={{delay: .1}}>
            <img src={togenim_logo} alt={togenim_logo} onClick={() => setOpen(!Open)} id='logo' />
            <AnimatePresence>
                {Open
                    ?
                    <motion.div key="project_info" exit={{ x: 2000 }} initial={{ x: 2000 }} animate={{ x: 0 }} transition={{ duration: .5 }} className="project_info">
                        <AiOutlineClose className="arrow" onClick={() => setOpen(!Open)} />
                        <div className="project_header">
                            <h1>Acceleracers</h1>
                            <img src={togenim_page} alt={togenim_page} id='screenshot' />
                        </div>
                        <div className="project_description">
                            <p>Latest project i've made, a multiple-page website where i described some of the aspects of the Hot Wheels Acceleracers series.
                                This was my first time ever using Typescript and i must say it is quite easy to handle and the pros are many.
                            </p>
                        </div>
                        <div className="project_stack">
                            <div className="section">
                                <FaReact className="icons" />
                                <FaCss3 className="icons" />
                                <FaHtml5 className="icons" />
                                <SiTypescript className="icons" />
                                <SiFirebase className="icons"/>
                            </div>
                        </div>
                        <div className="project_links">
                            <a href="http://togenim.netlify.app/" target='_blank' rel='noreferrer'><button>Live</button></a>
                            <a href="https://github.com/Kanomb/topgen" target='_blank' rel='noreferrer'><button>Repo</button></a>
                        </div>
                    </motion.div>
                    :
                    <></>
                }
            </AnimatePresence>
        </motion.div>
    )
}

export default Togenim