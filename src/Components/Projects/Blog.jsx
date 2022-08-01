import React from 'react';
import './Projects.css';
import blog_page from '../../assets/blog_page.PNG';
import { FaReact, FaCss3, FaHtml5 } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiFirebase } from 'react-icons/si';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

const Blog = () => {

    const MySwal = withReactContent(Swal)

    const ShowSwal = () => {
        MySwal.fire(
            <div className="alert_text">
                <p>Website where you can login and post something!. There's a list of posts already made that display the date when the post was created and the user that created said post.</p>
                <p>This website was my first attempt at connecting my react frontend with a firebase database. All of this to make CRUD operations.</p>
                <div className="icons_section">
                    <p>Tech used</p>
                    <FaReact className="icons" />
                    <FaCss3 className="icons" />
                    <FaHtml5 className="icons" />
                    <IoLogoJavascript className="icons" />
                    <SiFirebase className="icons" />
                </div>
            </div>)
    }



    return (
        <div className="test_project">
            <div className="project_title">
                <h1>Blog website</h1>
                <p>100% Responsive</p>
            </div>
            <img src={blog_page} alt="portfolio" className="image" onClick={ShowSwal} />
            <div className="buttons">
                <a href="https://yahirmb-blog.netlify.app" target="_blank" rel="noreferrer"><button className="page_buttons">See Live</button></a>
                <a href="https://github.com/Kanomb/blog" target="_blank" rel="noreferrer"><button className="page_buttons">Source code</button></a>
            </div>
        </div>
    )
}

export default Blog