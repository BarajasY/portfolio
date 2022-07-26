import React from 'react';
import './About.css';
import { AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

const About = () => {
    const url = 'https://github.com/Kanomb';

    const githubTab = () => {
        window.open(url, '_blank')
    }

    return (
        <div className="about_container">
            <motion.div className="about_content">
                <motion.div className="about_text" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 2 }}>
                    <h1>My name is Yahir Moreno Barajas, Mexican web developer looking for opportunities to improve my knowledge in the field.</h1>
                    <h1>My interest started about 18 months ago when i took the python language, i mainly wanted to become a data scientist, i even learned Pandas/Seaborn/Jpt notebooks...</h1>
                    <h1>Since i relatively knew how to use python i moved into web development after about 3 months, with django, but soon realized that Javascript is the king of languages when trying to build a website, so i started to learn it.</h1>
                    <h1>Lastly i focused myself and realized that i wasn't going to be productive if i became first a junior backend developer, so i started to learn CSS, HTML & React to become a frontend dev and then build my knowledge up until i'm capable enough to have a Full Stack role, with enough knowledge in both sides, frontend and backend.</h1>
                </motion.div>
                <motion.div className="contact_section" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 2, delay: 1 }}>
                    <AiFillGithub className="github_icon" onClick={githubTab} />
                    <p>My github</p>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default About