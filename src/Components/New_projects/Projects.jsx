import React, { useState } from 'react';
import './Projects.css';
import Elantra from './ProjectsFolder/Elantra';
import Rick from './ProjectsFolder/Rick';
import Blog from './ProjectsFolder/Blog';
import Yanagiya from './ProjectsFolder/Yanagiya';
import Astrobuyer from './ProjectsFolder/Astrobuyer';
import Quiz from './ProjectsFolder/Quiz';
import Pokechampions from './ProjectsFolder/Pokechampions'
import WeirdCalc from './ProjectsFolder/WeirdCalc';
import PokeQuiz from './ProjectsFolder/PokeQuiz';
import Portfolio from './ProjectsFolder/Portfolio';
import Acceleracers from './ProjectsFolder/Acceleracers';
import Togenim from './ProjectsFolder/Togenim';
import { motion } from 'framer-motion';

const Projects = () => {

    const [AllProjects, setAllProjects] = useState(false)

    return (
        <div className="projects_container">
            <motion.div className="projects_title" initial={{y: 50, opacity: 0}} whileInView={{y:0, opacity:1}}>
                <h1>Selected Projects</h1>
                <div className="projects_title_button">
                    <button onClick={() => setAllProjects(!AllProjects)}>All Projects</button>
                </div>
            </motion.div>
            <div className="projects_content">
                {AllProjects 
                    ? 
                    <section>
                        <Pokechampions />
                        <Rick />
                        <Blog />
                        <Portfolio />
                        <Yanagiya />
                        <Quiz />
                        <PokeQuiz />
                        <WeirdCalc />
                        <Elantra />
                        <Astrobuyer />
                        <Acceleracers/>
                        <Togenim />
                    </section>
                    :
                    <section>
                        <Togenim />
                        <Astrobuyer />
                        <Acceleracers/>
                    </section>
                }
            </div>
        </div>
    )
}

export default Projects