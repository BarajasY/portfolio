import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll'

const Navbar = () => {

    return (
        <div className="navbar_container">
            <div className="navbar_content">
                <div className="test">
                    <div className="navbar_text" id="about">
                        <h1><Link to="about_container" spy={true} smooth={true} offset={-100} duration={500}>About</Link></h1>
                    </div>
                    <div className="navbar_text" id="projects">
                        <h1><Link to="projects_container" spy={true} smooth={true} offset={100} duration={500}>Projects</Link></h1>
                    </div>
                    <div className="navbar_text" id="Contact">
                        <h1><Link to="contact_container" spy={true} smooth={true} offset={100} duration={500}>Contact</Link></h1>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar