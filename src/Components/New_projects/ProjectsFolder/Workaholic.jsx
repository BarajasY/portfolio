import React, { useState } from 'react'
import { FaCss3, FaHtml5, FaJava, FaReact } from 'react-icons/fa'
import { SiMysql, SiSpringboot, SiTypescript } from 'react-icons/si'
import workaholic_logo from '../../../assets/workaholic_log.webp';
import { AnimatePresence, motion } from 'framer-motion';
import workaholic_page from '../../../assets/workaholioc_page.webp';
import { AiOutlineClose } from 'react-icons/ai';

const Workaholic = () => {
    const [Open, setOpen] = useState(false)

  return (
    <motion.div className="project_content" initial={{y:10, opacity: 0}} whileInView={{y:0, opacity: 1}} transition={{delay: .13}}>
    <img src={workaholic_logo} alt="Logo" onClick={() => setOpen(!Open)} id='logo' />
    <AnimatePresence>
        {Open
            ?
            <motion.div key="project_info" exit={{ x: 2000 }} initial={{ x: 2000 }} animate={{ x: 0 }} transition={{ duration: .5 }} className="project_info">
                <AiOutlineClose className="arrow" onClick={() => setOpen(!Open)} />
                <div className="project_header">
                    <h1>ColorManager <span>Not Hosted</span></h1>
                    <img src={workaholic_page} alt="ColorManager" id='screenshot' />
                </div>
                <div className="project_description">
                    <p>Full stack application using React in the Frontend and Spring Boot in the backend, while MySQL as database. This project is a job postings site, any user can create an account as a worker, upload your cv and apply to jobs. Or as a Company where you'll be able to submit job listings.</p>
                </div>
                <div className="project_stack">
                    <div className="section">
                        <FaReact className="icons" />
                        <FaCss3 className="icons" />
                        <FaHtml5 className="icons" />
                        <SiTypescript className="icons" />
                        <SiMysql className="icons" />
                        <FaJava className="icons" />
                        <SiSpringboot className="icons" />
                    </div>
                </div>
                <div className="project_links">
                    <a href="https://github.com/BarajasY/Workaholic" target='_blank' rel='noreferrer'><button>Repo</button></a>
                </div>
            </motion.div>
            :
            <></>
        }
    </AnimatePresence>
</motion.div>
  )
}

export default Workaholic