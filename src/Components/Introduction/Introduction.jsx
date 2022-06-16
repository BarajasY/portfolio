import React, { useRef, useEffect } from 'react';
import './introduction.css';
import Typed from 'react-typed';
import { gsap } from 'gsap'

const Header = () => {

    const boxRef = useRef();
    useEffect(() => {
        gsap.from(boxRef.current, { duration: 2, opacity: 0 })
        gsap.to(boxRef.current, { duration: 2, opacity: 10 })
    });

    return (
        <div className="introduction_container">
            <div className="intro_text" id="intro" ref={boxRef}>
                <h1>Yahir Moreno B.</h1>
                <Typed
                    strings={[
                        "an aspiring self-taught frontend developer"
                    ]}
                    typeSpeed={80}
                    backSpeed={100}
                >
                </Typed >
            </div>
        </div >
    )
}
export default Header