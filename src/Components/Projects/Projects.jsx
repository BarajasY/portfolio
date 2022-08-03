import React from 'react';
import './Projects.css';
import Astrobuyer from './Astrobuyer';
import Blog from './Blog';
import Elantra from './Elantra';
import Portfolio from './Portfolio';
import Rick from './Rick';
import Yanagiya from './Yanagiya';
import Quiz from './Quiz'
import Pokechampions from './Pokechampions'
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
                    <Elantra />
                    <Rick />
                    <Portfolio />
                    <Yanagiya />
                    <Blog />
                    <Astrobuyer />
                    <Quiz />
                    <Pokechampions />
                </div>
            </div>
        </div >
    )
}

export default Projects