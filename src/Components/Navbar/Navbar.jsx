import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll'

const Navbar = () => {
    /*     const [Navbar, setNavbar] = useState(false)
    
        const changeNavbar = () => {
            if (window.scrollY >= 100) {
                setNavbar(true)
            } else {
                setNavbar(false)
            }
        }
    
        window.addEventListener('scroll', changeNavbar) */

    return (
        <div className="navbar_container">
            <hr />
            <div className="navbar_content">
                <div className="test">
                    <div className="navbar_text" id="name">
                        <h1><Link to="Projects" spy={true} smooth={true} offset={-150} duration={500}>Projects</Link></h1>
                    </div>
                    <hr />
                    <div className="navbar_text" id="contact">
                        <h1><Link to="#" spy={true} smooth={true} offset={-150} duration={500}>Contact</Link></h1>
                    </div>
                    <hr />
                    <div className="navbar_text" id="about">
                        <h1><Link to="Abut" spy={true} smooth={true} offset={-150} duration={500}>About</Link></h1>
                    </div>
                    <hr />
                </div>
            </div>
        </div >
    )
}

export default Navbar