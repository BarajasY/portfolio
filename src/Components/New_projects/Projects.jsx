import React from 'react';
import './Projects.css';
import Elantra from './Elantra';
import Rick from './Rick';
import Blog from './Blog';
import Yanagiya from './Yanagiya';
import Astrobuyer from './Astrobuyer';
import Quiz from './Quiz';
import Pokechampions from './Pokechampions'
import WeirdCalc from './WeirdCalc';
import PokeQuiz from './PokeQuiz';

const Projects = () => {

    return (
        <div className="projects_container">
            <div className="projects_title">
                <h1>All of my Projects</h1>
            </div>
            <div className="projects_content">
                <Elantra />
                <Rick />
                <Blog />
                <Yanagiya />
                <Astrobuyer />
                <Quiz />
                <Pokechampions />
                <WeirdCalc />
                <PokeQuiz />
            </div>
        </div>
    )
}

export default Projects