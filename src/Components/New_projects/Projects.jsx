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
import ColorManager from './ProjectsFolder/ColorManager';
import { motion } from 'framer-motion';
import Workaholic from './ProjectsFolder/Workaholic';

const Projects = () => {

    const [AllProjects, setAllProjects] = useState(false)

    return (
        <div className="projects_container">
            <motion.div className="projects_title" initial={{y: 50, opacity: 0}} whileInView={{y:0, opacity:1}}>
                <h1>{AllProjects ? 'All Projects' : 'Selected Projects'}</h1>
                <div className="projects_title_button">
                    <button onClick={() => setAllProjects(!AllProjects)}>{AllProjects ? 'Selected' : 'All Projects'}</button>
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
                        <Astrobuyer />
                        <Pokechampions />
                    </section>
                    :
                    <section>
                        <Togenim />
                        <Acceleracers/>
                        <ColorManager />
                        <Workaholic />
                    </section>
                }
            </div>
        </div>
    )
}

export default Projects