import React from 'react';
import './Navbar.css';
import { motion } from 'framer-motion';
import {FaLinkedinIn} from 'react-icons/fa'
import {FiGithub } from 'react-icons/fi';

const Navbar = () => {
    return (
        <div className="navbar_container">
            <div className="navbar_content">
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
                        <h1><a href="https://github.com/Kanomb" target="_blank" rel="noreferrer"><FiGithub /></a></h1>
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
                        <h1><a href="https://www.linkedin.com/in/yahirmb" target="_blank" rel="noreferrer"><FaLinkedinIn /></a></h1>
                    </motion.span>
                </div>
            </div>

        </div >
    )
}

export default Navbar