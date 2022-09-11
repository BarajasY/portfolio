import React from 'react';
import './Navbar.css';
import { motion } from 'framer-motion';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import logo from '../../assets/empty-y.png';

const Navbar = () => {
    return (
        <div className="navbar_container">
            <div className="navbar_content">
                <div className="logo">
                    <img src={logo} alt="My logo" />
                </div>
                <div className="test">
                    <motion.div className="navbar_text" id="github" animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1, delay: 1 }}>
                        <h1><a href="https://github.com/Kanomb" target="_blank" rel="noreferrer"><AiFillGithub /></a></h1>
                    </motion.div>
                    <motion.div className="navbar_text" id="linkedin" animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1, delay: 1 }}>
                        <h1><a href="https://www.linkedin.com/in/yahirmb" target="_blank" rel="noreferrer"><AiFillLinkedin /></a></h1>
                    </motion.div>
                </div>
            </div>

        </div >
    )
}

export default Navbar