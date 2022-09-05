import React from 'react';
import './introduction.css';
import { motion } from 'framer-motion'
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className="introduction_container">
            <div className="intro_text">
                <motion.h1>
                    <motion.span animate={{ y: 0 }} initial={{ y: -80 }} transition={{ duration: .2 }}>Y</motion.span>
                    <motion.span animate={{ y: 0 }} initial={{ y: -80 }} transition={{ duration: .2, delay: .15 }}>A</motion.span>
                    <motion.span animate={{ y: 0 }} initial={{ y: -80 }} transition={{ duration: .2, delay: .30 }}>H</motion.span>
                    <motion.span animate={{ y: 0 }} initial={{ y: -80 }} transition={{ duration: .2, delay: .45 }}>I</motion.span>
                    <motion.span animate={{ y: 0 }} initial={{ y: -80 }} transition={{ duration: .2, delay: .60 }}>R</motion.span>
                    <motion.div animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -80 }} transition={{ delay: .75, duration: 1 }} className="last_name">
                        <span style={{ color: 'rgb(222,222,222)', marginRight: 2 }}>M</span>
                        <span style={{ color: 'rgb(222,222,222)', marginLeft: 2 }}>B</span>
                    </motion.div>
                </motion.h1>
                <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 2, delay: 1 }} >
                    <p>Mexican self-taught frontend
                        <Typed
                            strings={[
                                "developer",
                                "student",
                                "enthusiast"
                            ]}
                            typeSpeed={100}
                            backSpeed={100}
                            id="typed"
                            loop>
                        </Typed >
                    </p>
                </motion.div>
            </div>
        </div >
    )
}
export default Header