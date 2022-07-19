import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion'

const Navbar = () => {

    const [Position, setPosition] = useState(
        {
            X: null,
            Y: null
        }
    )

    useEffect(() => {
        document.addEventListener('mousemove', function (e) {
            setPosition({
                X: e.clientX,
                Y: e.clientY
            })
        })
    }, [])

    return (
        <div className="navbar_container">
            <div className="circle" style={{ transform: `translate(${Position.X}px, ${Position.Y}px)` }} id="mouse"></div>
            <div className="navbar_content">
                <div className="test">
                    <motion.div className="navbar_text" id="about" animate={{ x: 0 }} initial={{ x: -2000 }} transition={{ duration: 1, type: "spring", delay: .3 }}>
                        <h1><Link to="about_container" spy={true} smooth={true} offset={-50} duration={500}>About</Link></h1>
                    </motion.div>
                    <motion.div className="navbar_text" id="projects" animate={{ x: 0 }} initial={{ x: -2000 }} transition={{ delay: .2, duration: 1, type: "spring" }}>
                        <h1><Link to="projects_container" spy={true} smooth={true} offset={0} duration={500}>Projects</Link></h1>
                    </motion.div>
                    <motion.div className="navbar_text" id="Contact" animate={{ x: 0 }} initial={{ x: -2000 }} transition={{ delay: .1, duration: 1, type: "spring" }}>
                        <h1><Link to="contact_container" spy={true} smooth={true} offset={100} duration={500}>Contact</Link></h1>
                    </motion.div>
                </div>
            </div>
        </div >
    )
}

export default Navbar