import React, { useState } from 'react';
import '../Projects.css';
import quiz from '../../../assets/quiz_logo.png';
import Quiz_page from '../../../assets/Quiz.webp';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaCss3, FaHtml5 } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { IoLogoJavascript } from 'react-icons/io';
import { SiFirebase } from 'react-icons/si';

const Quiz = () => {
    const [Open, setOpen] = useState(false)

    return (
        <motion.div className="project_content" initial={{y:10, opacity: 0}} whileInView={{y:0, opacity: 1}} transition={{delay: .17}}>
            <img src={quiz} alt={quiz} onClick={() => setOpen(!Open)} id='logo' />
            <AnimatePresence>
                {Open
                    ?
                    <motion.div key="project_info" exit={{ x: 2000 }} initial={{ x: 2000 }} animate={{ x: 0 }} transition={{ duration: .5 }} className="project_info">
                        <AiOutlineClose className="arrow" onClick={() => setOpen(!Open)} />
                        <div className="project_header">
                            <h1>React/Javascript Quiz</h1>
                            <img src={Quiz_page} alt={Quiz_page} id='screenshot' />
                        </div>
                        <div className="project_description">
                            <p>A quiz app where React/Javascript related questions will be shown to the user. This project allowed me to really understand how some react hooks work, such as UseEffect and useState. Additionally i learned React theory.</p>
                        </div>
                        <div className="project_stack">
                            <div className="section">
                                <FaReact className="icons" />
                                <FaCss3 className="icons" />
                                <FaHtml5 className="icons" />
                                <IoLogoJavascript className="icons" />
                                <SiFirebase className="icons" />
                            </div>
                        </div>
                        <div className="project_links">
                            <a href="https://yahirmb-quiz.netlify.app/" target='_blank' rel='noreferrer'><button>Live</button></a>
                            <a href="https://github.com/Kanomb/programming-quiz" target='_blank' rel='noreferrer'><button>Repo</button></a>
                        </div>
                    </motion.div>
                    :
                    <></>
                }
            </AnimatePresence>
        </motion.div>
    )
}

export default Quiz