import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const About = () => {

    return (
        <div className="about_container">
            <div className="about_content">
                <div className="about_text">
                    <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>My name is Yahir Moreno Barajas, a software engineering university student, and this is my portfolio!</motion.h1>
                </div>
            </div>
        </div>
    )
}

export default About