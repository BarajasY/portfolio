import React, { useEffect, useState } from 'react';
import './introduction.css';
import { motion } from 'framer-motion'
import Typed from 'react-typed';

const Header = () => {
    const [OffsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="introduction_container">
            <div className="intro_text" style={{ transform: `translateY(${-OffsetY * .3}px)` }}>
                <motion.h1>
                    <motion.span animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }}>Y</motion.span>
                    <motion.span animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1, delay: .1 }}>A</motion.span>
                    <motion.span animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1, delay: .2 }}>H</motion.span>
                    <motion.span animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1, delay: .3 }}>I</motion.span>
                    <motion.span animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1, delay: .4 }}>R</motion.span>
                    <motion.span animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1, delay: .5 }}>M</motion.span>
                    <motion.span animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1, delay: .6 }}>B</motion.span>
                </motion.h1>
                <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 2, delay: .2 }} >
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