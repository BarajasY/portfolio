import React, { useState } from 'react';
import './Projects.css';
import pokequiz from '../../assets/pokequiz_logo.png';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaCss3, FaHtml5 } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { IoLogoJavascript } from 'react-icons/io';
import { SiFirebase } from 'react-icons/si';

const PokeQuiz = () => {
    const [Open, setOpen] = useState(false)

    return (
        <div className="project_content">
            <img src={pokequiz} alt={pokequiz} onClick={() => setOpen(!Open)} />
            <AnimatePresence>
                {Open
                    ?
                    <motion.div key="project_info" exit={{ x: 2000 }} initial={{ x: 2000 }} animate={{ x: 0 }} transition={{ duration: .8 }} className="project_info">
                        <AiOutlineClose className="arrow" onClick={() => setOpen(!Open)} />
                        <div className="project_header">
                            <h1>Pokemon Quiz</h1>
                        </div>
                        <div className="project_description">
                            <p>Another single page application using pure react and javascript, and a little bit of firebase backend.</p>
                            <p>In this project you can guess pokemons based on their gen 5 sprites.</p>
                            <p>I've added selectors for the amount of pokemons the user wish to guess, and a difficulty selector.</p>
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
                            <a href="https://yahirmb-pokequiz.netlify.app/" target='_blank' rel='noreferrer'><button>Live</button></a>
                            <a href="https://github.com/Kanomb/pokequiz" target='_blank' rel='noreferrer'><button>Repo</button></a>
                        </div>
                    </motion.div>
                    :
                    <></>
                }
            </AnimatePresence>
        </div>
    )
}

export default PokeQuiz