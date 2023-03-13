import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { FaCss3, FaHtml5, FaJava, FaReact } from 'react-icons/fa';
import { SiPostgresql, SiSpringboot, SiTypescript } from 'react-icons/si';
import ColorManager_page from '../../../assets/ColorManager-screenshot.webp';
import ColorManager_logo from '../../../assets/ColorManager.webp'
import '../Projects.css';

const ColorManager = () => {
    const [Open, setOpen] = useState(false)

  return (
    <motion.div className="project_content" initial={{y:10, opacity: 0}} whileInView={{y:0, opacity: 1}} transition={{delay: .13}}>
    <img src={ColorManager_logo} alt="Logo" onClick={() => setOpen(!Open)} id='logo' />
    <AnimatePresence>
        {Open
            ?
            <motion.div key="project_info" exit={{ x: 2000 }} initial={{ x: 2000 }} animate={{ x: 0 }} transition={{ duration: .5 }} className="project_info">
                <AiOutlineClose className="arrow" onClick={() => setOpen(!Open)} />
                <div className="project_header">
                    <h1>ColorManager</h1>
                    <img src={ColorManager_page} alt="ColorManager" id='screenshot' />
                </div>
                <div className="project_description">
                    <p>A full stack application where users can create an account and then login, to share their color palettes with the world. Very proud of this project since it's my very first time discovering SpringBoot capabilities. Looking forward to make more fullstack applications.</p>
                </div>
                <div className="project_stack">
                    <div className="section">
                        <FaReact className="icons" />
                        <FaCss3 className="icons" />
                        <FaHtml5 className="icons" />
                        <SiTypescript className="icons" />
                        <SiPostgresql className="icons" />
                        <FaJava className="icons" />
                        <SiSpringboot className="icons" />
                    </div>
                </div>
                <div className="project_links">
                    <a href="https://github.com/Kanomb/ColorManager" target='_blank' rel='noreferrer'><button>Repo</button></a>
                </div>
            </motion.div>
            :
            <></>
        }
    </AnimatePresence>
</motion.div>
  )
}

export default ColorManager