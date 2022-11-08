import React from 'react';
import './Stack.css';
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from 'react-icons/io'
import { SiFirebase, SiBootstrap, SiReact, SiTypescript, SiExpress, SiGraphql, SiPostgresql, SiRedux } from 'react-icons/si';
import { motion } from 'framer-motion';

const Stack = () => {
    return (
        <div className="stack_container">
            <div className="stack_content">
                <div className="used_tech">
                    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5 }} viewport={{ once: true }}>
                        <h1>Tech i've used</h1>
                    </motion.div>
                    <div className="wrapper">
                        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5 }} viewport={{ once: true }}>
                            <SiReact className="stack_icon" />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .1 }} viewport={{ once: true }}>
                            <IoLogoJavascript className="stack_icon" />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .2 }} viewport={{ once: true }}>
                            <IoLogoHtml5 className="stack_icon" />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .3 }} viewport={{ once: true }}>
                            <IoLogoCss3 className="stack_icon" />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .4 }} viewport={{ once: true }}>
                            <SiFirebase className="stack_icon" />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .5 }} viewport={{ once: true }}>
                            <SiBootstrap className="stack_icon" />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .6 }} viewport={{ once: true }}>
                            <SiExpress className="stack_icon" />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .7 }} viewport={{ once: true }}>
                            <SiPostgresql className="stack_icon" />
                        </motion.div>
                    </div>
                </div>
                <div className="learning_tech">
                    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .8 }} viewport={{ once: true }}>
                        <h1>Tech i'm looking forward to learn</h1>
                    </motion.div>
                    <div className="wrapper">
                        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .9 }} viewport={{ once: true }}>
                            <SiTypescript className="stack_icon" />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: 1 }} viewport={{ once: true }}>
                            <SiRedux className="stack_icon" />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: 1.1 }} viewport={{ once: true }}>
                            <SiGraphql className="stack_icon" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stack