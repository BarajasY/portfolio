import React from 'react';
import './Projects.css';
import Astrobuyer from './Astrobuyer';
import Blog from './Blog';
import Elantra from './Elantra';
import Portfolio from './Portfolio';
import Rick from './Rick';
import Yanagiya from './Yanagiya';
import Quiz from './Quiz'
import { motion } from 'framer-motion';

const Projects = () => {

    return (
        <div className="projects_container">
            <div className="proyects_content">
                <div className="projects_header">
                    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
                        <h1>Projects</h1>
                    </motion.div>
                </div>
                <div className="projects">
                    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: .2 }} viewport={{ once: true }}>
                        <Elantra />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: .4 }} viewport={{ once: true }}>
                        <Rick />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: .6 }} viewport={{ once: true }}>
                        <Portfolio />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: .8 }} viewport={{ once: true }}>
                        <Yanagiya />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1 }} viewport={{ once: true }}>
                        <Blog />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.2 }} viewport={{ once: true }}>
                        <Astrobuyer />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.4 }} viewport={{ once: true }}>
                        <Quiz />
                    </motion.div>
                </div>
            </div>
        </div >
    )
}

export default Projects