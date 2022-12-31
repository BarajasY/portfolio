import React from 'react';
import './Stack.css';
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from 'react-icons/io'
import { SiFirebase, SiBootstrap, SiReact, SiTypescript, SiExpress, SiPostgresql, SiGithub, SiVisualstudiocode } from 'react-icons/si';
import { motion } from 'framer-motion';

const Stack = () => {
    return (
        <div className="stack_container">
            <div className="stack_content">
                <div className="used_tech">
                    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5 }} viewport={{ once: true }}>
                        <h1>Stack</h1>
                    </motion.div>
                    <div className="wrapper">
                        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5 }} viewport={{ once: true }}>
                            <SiReact className="stack_icon" />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .1 }} viewport={{ once: true }}>
                            <IoLogoJavascript className="stack_icon" />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .1 }} viewport={{ once: true }}>
                            <IoLogoHtml5 className="stack_icon" />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .1 }} viewport={{ once: true }}>
                            <IoLogoCss3 className="stack_icon" />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .1 }} viewport={{ once: true }}>
                            <SiFirebase className="stack_icon" />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .1 }} viewport={{ once: true }}>
                            <SiBootstrap className="stack_icon" />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .1 }} viewport={{ once: true }}>
                            <SiExpress className="stack_icon" />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .1 }} viewport={{ once: true }}>
                            <SiPostgresql className="stack_icon" />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .1 }} viewport={{ once: true }}>
                            <SiTypescript className="stack_icon"/>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .1 }} viewport={{ once: true }}>
                            <SiGithub className="stack_icon"/>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .1 }} viewport={{ once: true }}>
                            <SiVisualstudiocode className="stack_icon"/>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stack