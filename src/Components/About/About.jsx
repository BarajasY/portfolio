import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const About = () => {

    return (
        <div className="about_container">
            <div className="about_content">
                <div className="about_text">
                    <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>My name is Yahir Moreno Barajas, a mexican web developer and software engineering university student, and you're currently looking at my portfolio!</motion.h1>
                    <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>My journey started a while ago when i wanted to learn Python, at that time i had in mind to become a data scientist, i even learned Pandas/Seaborn/Jpt notebooks...</motion.h1>
                    <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>But then i discovered web development, and since i relatively knew how to use python i started to learn django after about 3 months, but soon realized that Javascript may be the best choice when trying to build a website, so i decided to learn it.</motion.h1>
                    <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>So, since my career started with backend development using Django, that's what i wanted to become, but then i realized that backend may not be the best choice if i was just starting my career. So i started to learn frontend tools such as CSS, HTML & React to build my knowledge up.</motion.h1>
                    <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>Finally i must say that i do have in mind to become a full stack developer, but for now, i'll be starting with frontend and then after a while, backend.</motion.h1>
                </div>
            </div>
        </div>
    )
}

export default About