import React, { useState } from 'react';
import './About.css';

const About = () => {

    const [About, setAbout] = useState(false)

    const handleClick = () => {
        if (About === true) {
            setAbout(false)
        } else {
            setAbout(true)
        }
    }

    return (
        <div className="about_container">
            {About
                ?
                <div className="about_content">
                    <button onClick={handleClick}>Less about me</button>
                    <h1>orem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lorem vel neque euismod dictum vel nec sapien. In ac posuere ex, a facilisis dui. Ut velit tellus, venenatis eget mauris sit amet, volutpat euismod nunc. Integer in urna bibendum, blandit enim id, tempor purus. Nunc laoreet augue in sem sodales imperdiet. Proin finibus malesuada augue eget maximus. Duis ac est nulla. Maecenas malesuada et purus eu volutpat. Vivamus a scelerisque velit. Duis at porta nunc. Aliquam quam risus, ultricies eget condimentum sit amet, accumsan ut est. Ut porttitor eu sem vitae posuere. Fusce tristique ipsum eget ultricies venenatis.

                        Nunc tincidunt, quam bibendum interdum molestie, augue nibh egestas sapien, ac tincidunt lorem lorem sit amet tellus. Sed eget turpis tortor. Nulla pellentesque commodo neque, maximus blandit dui ultricies ut. Praesent quis pharetra lorem, venenatis ornare arcu. Suspendisse non sem nec lacus commodo accumsan. Donec eu porta ipsum. In tempor volutpat lectus, at feugiat neque laoreet ac.</h1>
                </div>
                : <div className="about_content">
                    <button onClick={handleClick}>About me</button>
                </div>
            }
        </div>
    )
}

export default About