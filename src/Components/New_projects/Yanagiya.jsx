import React, { useState } from 'react';
import './Projects.css';
import yanagiya from '../../assets/yanagiya_logo3.png';
import yanagiya_page from '../../assets/yanagiya_page.webp';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaCss3, FaHtml5 } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { IoLogoJavascript } from 'react-icons/io';

const Yanagiya = () => {

    const [Open, setOpen] = useState(false)

    return (
        <div className="project_content">
            <img src={yanagiya} alt={yanagiya} onClick={() => setOpen(!Open)} id='logo' />
            <AnimatePresence>
                {Open
                    ?
                    <motion.div key="project_info" exit={{ x: 2000 }} initial={{ x: 2000 }} animate={{ x: 0 }} transition={{ duration: .5 }} className="project_info">
                        <AiOutlineClose className="arrow" onClick={() => setOpen(!Open)} />
                        <div className="project_header">
                            <h1>Yanagiya.mx Clone</h1>
                            <img src={yanagiya_page} alt={yanagiya_page} id='screenshot' />
                        </div>
                        <div className="project_description">
                            <p>My first ever clone website!. In this case we're talking about the Yanagiya.mx. Probably this project helped me better visualize how much work a real-life project can have.</p>
                        </div>
                        <div className="project_stack">
                            <div className="section">
                                <FaReact className="icons" />
                                <FaCss3 className="icons" />
                                <FaHtml5 className="icons" />
                                <IoLogoJavascript className="icons" />
                            </div>
                        </div>
                        <div className="project_links">
                            <a href="https://yanagiya-clone.netlify.app" target='_blank' rel='noreferrer'><button>Live</button></a>
                            <a href="https://github.com/Kanomb/yanagiya-clone" target='_blank' rel='noreferrer'><button>Repo</button></a>
                        </div>
                    </motion.div>
                    :
                    <></>
                }
            </AnimatePresence>
        </div>
    )
}

export default Yanagiya