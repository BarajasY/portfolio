import React, { useEffect, useState } from 'react';
import './introduction.css';
import Typed from 'react-typed';

const Header = () => {
    const [OffsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="introduction_container">
            <div className="intro_text" style={{ transform: `translateY(${-OffsetY * .3}px)` }}>
                <h1>Yahir Moreno B.</h1>
                <Typed
                    strings={[
                        "an aspiring self-taught frontend developer based in México"
                    ]}
                    typeSpeed={70}
                    backSpeed={100}
                    id="typed">
                </Typed >
            </div>
        </div >
    )
}
export default Header