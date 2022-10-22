import React, { useState } from 'react';
import './Projects.css';
import blog from '../../assets/blog_logo.png';
import blog_page from '../../assets/blog_page.webp';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaCss3, FaHtml5 } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { IoLogoJavascript } from 'react-icons/io';
import { SiFirebase } from 'react-icons/si';

const Blog = () => {
    const [Open, setOpen] = useState(false)

    return (
        <div className="project_content">
            <img src={blog} alt={blog} onClick={() => setOpen(!Open)} id='logo' />
            <AnimatePresence>
                {Open
                    ?
                    <motion.div key="project_info" exit={{ x: 2000 }} initial={{ x: 2000 }} animate={{ x: 0 }} transition={{ duration: .5 }} className="project_info">
                        <AiOutlineClose className="arrow" onClick={() => setOpen(!Open)} />
                        <div className="project_header">
                            <h1>Blog Site</h1>
                            <img src={blog_page} alt={blog_page} id='screenshot' />
                        </div>
                        <div className="project_description">
                            <p>Website where you can login and post something!. There's a list of posts already made that display the date when the post was created and the user that created said post.
                                This website was my first attempt at connecting my react frontend with a firebase database. All of this to make CRUD operations.</p>
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
                            <a href="https://yahirmb-blog.netlify.app" target='_blank' rel='noreferrer'><button>Live</button></a>
                            <a href="https://github.com/Kanomb/blog" target='_blank' rel='noreferrer'><button>Repo</button></a>
                        </div>
                    </motion.div>
                    :
                    <></>
                }
            </AnimatePresence>
        </div>
    )
}

export default Blog