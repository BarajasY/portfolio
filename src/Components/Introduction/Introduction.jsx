import React from 'react';
import './introduction.css';
import { motion } from 'framer-motion'

const Header = () => {
    return (
        <div className="introduction_container">
            <motion.div className="intro_text" initial={{x: -50, opacity: 0}} whileInView={{x: 0, opacity:1}}>
                <motion.h1>
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
            }}>Y</motion.span>
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
            }}>A</motion.span>
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
            }}>H</motion.span>
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
            }}>I</motion.span>
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
            }}>R</motion.span>
                </motion.h1>
            </motion.div>
            <motion.div className="intro_description" initial={{x: 50, opacity: 0}} whileInView={{x: 0, opacity:1}}>
                <h1>Mexican upcoming software engineer</h1>
            </motion.div>
        </div >
    )
}
export default Header