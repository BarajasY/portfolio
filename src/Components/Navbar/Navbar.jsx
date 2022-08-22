import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion'

const Navbar = () => {
    return (
        <div className="navbar_container">
            <div className="navbar_content">
                <div className="test">
                    <motion.div className="navbar_text" id="about" animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }}>
                        <h1><Link to="about_container" spy={true} smooth={true} offset={100} duration={500}>About</Link></h1>
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