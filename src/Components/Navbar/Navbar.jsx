import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import { motion, useScroll } from 'framer-motion'

const Navbar = () => {
    const [Position, setPosition] = useState(
        {
            X: null,
            Y: null
        }
    )
    const { scrollYProgress } = useScroll()
    const [Progress, setProgress] = useState(0)

    useEffect(() => {
        document.addEventListener('mousemove', function (e) {
            setPosition({
                X: e.clientX,
                Y: e.clientY
            })
        })
        document.addEventListener('scroll', function () {
            setProgress(scrollYProgress.current)
        })

    }, [scrollYProgress])

    return (
        <div className="navbar_container">
            <div className="progress_bar">
                <motion.div className="fill_bar" style={{ height: Progress * 100 + '%' }}></motion.div>
            </div>
            <div className="circle" style={{ transform: `translate(${Position.X}px, ${Position.Y}px)` }} id="mouse"></div>
            <div className="navbar_content">
                <div className="test">
                    <motion.div className="navbar_text" id="about" animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }}>
                        <h1><Link to="about_container" spy={true} smooth={true} offset={-50} duration={500}>About</Link></h1>
                    </motion.div>
                    <motion.div className="navbar_text" id="projects" animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }}>
                        <h1><Link to="projects_container" spy={true} smooth={true} offset={0} duration={500}>Projects</Link></h1>
                    </motion.div>
                    <motion.div className="navbar_text" id="Contact" animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }}>
                        <h1><Link to="contact_container" spy={true} smooth={true} offset={100} duration={500}>Contact</Link></h1>
                    </motion.div>
                </div>
            </div>

        </div >
    )
}

export default Navbar
/* height: `${scrollYProgress.current * 100}%` */