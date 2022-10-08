import React, { useState } from 'react';
import './Projects.css';
import calculators from '../../assets/calculators_logo.png';
import weird_calculators from '../../assets/weird_calculator.PNG';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaCss3, FaHtml5 } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { IoLogoJavascript } from 'react-icons/io';

const WeirdCalc = () => {
    const [Open, setOpen] = useState(false)

    return (
        <div className="project_content">
            <img src={calculators} alt={calculators} onClick={() => setOpen(!Open)} id='logo' />
            <AnimatePresence>
                {Open
                    ?
                    <motion.div key="project_info" exit={{ x: 2000 }} initial={{ x: 2000 }} animate={{ x: 0 }} transition={{ duration: .5 }} className="project_info">
                        <AiOutlineClose className="arrow" onClick={() => setOpen(!Open)} />
                        <div className="project_header">
                            <h1>Weird Calculators</h1>
                            <img src={weird_calculators} alt={weird_calculators} id='screenshot' />
                        </div>
                        <div className="project_description">
                            <p>A single page application about some calculators!
                                I was messing around in Wikipedia when i found these kind of numbers, the narcissistic and the Munchausen, which require some calculations to get.
                                So i decided to hop into VSC and make myself some calculators of those numbers. I will add more calculators to this site in the near future!</p>
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
                            <a href="https://yahirmb-calc.netlify.app" target='_blank' rel='noreferrer'><button>Live</button></a>
                            <a href="https://github.com/Kanomb/calculators" target='_blank' rel='noreferrer'><button>Repo</button></a>
                        </div>
                    </motion.div>
                    :
                    <></>
                }
            </AnimatePresence>
        </div>
    )
}

export default WeirdCalc