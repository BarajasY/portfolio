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
                    <motion.img animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1, delay: 1 }} src={logo} alt="My logo" />
                </div>
                <div className="test">
                    <motion.span whileHover={{ scale: 1.4}} transition={{
                        default: {
                            duration: 0.1,
                            ease: [0, 0.71, 0.2, 1.01]
                        },
                        scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001
                        }
                     }} className="navbar_text" id="github">
                        <h1><a href="https://github.com/Kanomb" target="_blank" rel="noreferrer"><AiFillGithub /></a></h1>
                    </motion.span>
                    <motion.span whileHover={{ scale: 1.4}} transition={{
                        default: {
                            duration: 0.1,
                            ease: [0, 0.71, 0.2, 1.01]
                        },
                        scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001
                        }
                    }} className="navbar_text" id="linkedin">
                        <h1><a href="https://www.linkedin.com/in/yahirmb" target="_blank" rel="noreferrer"><AiFillLinkedin /></a></h1>
                    </motion.span>
                </div>
            </div>

        </div >
    )
}

export default Navbar