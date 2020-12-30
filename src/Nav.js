import './Nav.css'
import React, { useState, useEffect } from 'react'

function Nav(){
    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false)
        })

        return () => {
            window.removeEventListener('scroll')
        }
    }, [])
    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <img
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
                alt="Netflix"
            />

            <img
                src="https://www.allthetests.com/quiz22/picture_thumb/pic_1171831236_1.png?1592828498"
                alt="Avatar" className="nav__avatar"/>
        </div>
    )
};

export default Nav
