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
                <motion.h1 animate={{ x: 0 }} initial={{ x: -2000 }} transition={{ duration: 2, type: "spring" }}><span>Y</span><span>A</span><span>H</span><span>I</span><span>R</span> <span>M</span><span>B</span></motion.h1>
                <motion.div animate={{ x: 0 }} initial={{ x: -2000 }} transition={{ duration: 2, type: "spring", delay: .2 }} >
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