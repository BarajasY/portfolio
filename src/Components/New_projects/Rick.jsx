import React, { useState } from 'react';
import './Projects.css';
import { motion, AnimatePresence } from 'framer-motion';
import rick from '../../assets/rick_logo.png';
import RAM_API from '../../assets/RAM_API.webp';
import { AiOutlineClose } from 'react-icons/ai';
import { FaReact, FaCss3, FaHtml5 } from 'react-icons/fa';
import { AiFillApi } from 'react-icons/ai';

const Rick = () => {
    const [Open, setOpen] = useState(false)

    return (
        <motion.div className="project_content" initial={{y:10, opacity: 0}} whileInView={{y:0, opacity: 1}} transition={{delay: .12}}>
            <img src={rick} alt={rick} onClick={() => setOpen(!Open)} id='logo' />
            <AnimatePresence>
                {Open
                    ?
                    <motion.div key="project_info" exit={{ x: 2000 }} initial={{ x: 2000 }} animate={{ x: 0 }} transition={{ duration: .5 }} className="project_info">
                        <AiOutlineClose className="arrow" onClick={() => setOpen(!Open)} />
                        <div className="project_header">
                            <h1>API consumption with Rick and Morty</h1>
                            <img src={RAM_API} alt={RAM_API} id='screenshot' />
                        </div>
                        <div className="project_description">
                            <p>My first attempt to use an API!. In this case i used the Rick and Morty API. It allows the user to see the characters from the show and an additional description of them.
                                This project allowed me to better understand how JSX and APIS work.</p>
                        </div>
                        <div className="project_stack">
                            <div className="section">
                                <FaReact className="icons" />
                                <FaCss3 className="icons" />
                                <FaHtml5 className="icons" />
                                <AiFillApi className="icons" />
                            </div>
                        </div>
                        <div className="project_links">
                            <a href="https://rickandmortyapi-test.netlify.app/" target='_blank' rel='noreferrer'><button>Live</button></a>
                            <a href="https://github.com/Kanomb/api_101" target='_blank' rel='noreferrer'><button>Repo</button></a>
                        </div>
                    </motion.div>
                    :
                    <></>
                }
            </AnimatePresence>
        </motion.div>
    )
}

export default Rick