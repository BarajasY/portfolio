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
            <hr />
            <motion.div className="about_content">
                <div className="about_wrapper">
                    <motion.div className="about_text" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 2 }}>
                        <h1>Hello I am Yahir Moreno Barajas, a mexican web developer and software engineering university student, and you're currently looking at my portfolio!</h1>
                        <h1>It all started a while ago when i wanted to learn Python, at that time i had in mind to become a data scientist, i even learned Pandas/Seaborn/Jpt notebooks...</h1>
                        <h1>But then i discovered web development, and since i relatively knew how to use python i started to learn django after about 3 months, but soon realized that Javascript may be the best choice when trying to build a website, so i decided to learn it.</h1>
                        <h1>So, since my career started with backend development using Django, that's what i wanted to become, but then i realized that backend may not be the best choice if i was just starting my career. So i started to learn frontend tools such as CSS, HTML & React to build my knowledge up.</h1>
                        <h1>Finally i must say that i do have in mind to become a full stack developer, but for now, i'll be starting with frontend and then after a while, backend.</h1>
                    </motion.div>
                    <motion.div className="contact_section" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 2, delay: 1 }}>
                        <AiFillGithub className="github_icon" onClick={githubTab} />
                        <p>My github</p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

export default About