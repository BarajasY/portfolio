import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {

    const [Position, setPosition] = useState(
        {
            X: null,
            Y: null
        }
    )

    useEffect(() => {
        document.addEventListener('mousemove', function (e) {
            setPosition({
                X: e.clientX,
                Y: e.clientY
            })
        })
    }, [])

    return (
        <div className="navbar_container">
            <div className="circle" style={{ transform: `translate(${Position.X}px, ${Position.Y}px)` }} id="mouse"></div>
            <div className="navbar_content">
                <div className="test">
                    <div className="navbar_text" id="about">
                        <h1><Link to="about_container" spy={true} smooth={true} offset={-200} duration={500}>About</Link></h1>
                    </div>
                    <div className="navbar_text" id="projects">
                        <h1><Link to="projects_container" spy={true} smooth={true} offset={-300} duration={500}>Projects</Link></h1>
                    </div>
                    <div className="navbar_text" id="Contact">
                        <h1><Link to="contact_container" spy={true} smooth={true} offset={-700} duration={500}>Contact</Link></h1>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar