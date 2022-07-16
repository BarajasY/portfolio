import React from 'react';
import './Projects.css';
import blog_page from '../../assets/blog_page.PNG';
import { FaReact, FaCss3, FaHtml5 } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiFirebase } from 'react-icons/si';


const Blog = () => {
    return (
        <div className="test_project" >
            <img src={blog_page} alt="portfolio" className="image" />
            <div className="buttons">
                <a href="https://yahirmb-blog.netlify.app" target="_blank" rel="noreferrer"><button className="page_buttons">See Live</button></a>
                <a href="https://github.com/Kanomb/blog" target="_blank" rel="noreferrer"><button className="page_buttons">Source code</button></a>
            </div>
            <div className="project_title">
                <h1>Blog website</h1>
                <p>100% Responsive</p>
            </div>
            <div className="project_description">
                <div className="description_text">
                    <p>First project where i manage to use a database. In this case it is a classic blog webpage in which you can login and logout with google, create/delete posts and even edit them!</p>
                    <p>For this project i used:</p>
                    <li>React, Javascript, CSS and HTML.</li>
                    <li>Firebase to work as an authenticator and as a database.</li>
                    <li>React hooks such as useState and useEffect.</li>
                    <li>React libraries such as react-icons, react-router-dom.</li>
                </div>
                <div className="description_icons">
                    <FaReact className="icon" />
                    <FaCss3 className="icon" />
                    <FaHtml5 className="icon" />
                    <IoLogoJavascript className="icon" />
                    <SiFirebase className="icon" />
                </div>
            </div>
        </div>
    )
}

export default Blog