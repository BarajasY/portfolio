import React, { useState } from 'react';
import './About.css';
import { AiOutlineMail } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const About = () => {

    const [About, setAbout] = useState(false)

    const handleClick = () => {
        if (About === true) {
            setAbout(false)
        } else {
            setAbout(true)
        }
    }

    const copy = () => {
        const value = "yahirmb7568@gmail.com";
        navigator.clipboard.writeText(value);
        alert("Copied my email to your clipboard!");
    }

    const githubTab = () => {
        const url = 'https://github.com/Kanomb';
        window.open(url, '_blank')
    }

    return (
        <>
            {About
                ?
                <div className="about_container">
                    <div className="about_content active">
                        <button onClick={handleClick}>Less about me</button>
                        <div className="about_text">
                            <h1>My name is Yahir Moreno Barajas, i'm 19 and i am a Mexican web developer looking for opportunities to improve my knowledge in the field.</h1>
                            <h1>My interest started about 18 months ago when i took the python programming language, i mainly wanted to become a data scientist, i even learned Pandas/Seaborn/Jpt notebooks...</h1>
                            <h1>Since i relatively knew how to use python i moved into web development after about 3 months, with django, but soon realized that Javascript is the king of programming languages when trying to build a website, so i started to learn it.</h1>
                            <h1>Lastly i focused myself and realized that i wasn't going to be productive if i became first a junior backend developer, so i started to learn CSS, HTML & React to become a frontend dev and then build my knowledge up until i'm capable enough to have a Full Stack role, with enough knowledge in both sides, frontend and backend.</h1>
                        </div>
                        <div className="contact_section">
                            <AiOutlineMail className="icons" onClick={copy} />
                            <AiFillGithub className="icons" onClick={githubTab} />
                        </div>
                    </div>
                </div>
                :
                <div className="about_container">
                    <div className="about_content">
                        <button onClick={handleClick}>About me & Contact</button>
                    </div>
                </div>
            }
        </>
    )
}

export default About