//------------------------------------------- packages -------------------------------------------//
import React from 'react'
//------------------------------------------ components ------------------------------------------//
import LoginButton from '../Shared/LoginButton'
import Groupley from '../Shared/Groupley/Groupley'
import Logo from '../Shared/Logo/Logo.js'
import BackgroundImage from '../Shared/BackgroundImage/BackgroundImage'
//-------------------------------------------- styles --------------------------------------------//
import './Home.css'
//----------------------------------------- home layout ------------------------------------------//
const HomeLayout = props => {
    return (
        <div>
            <Logo />
            <Groupley />
            <LoginButton/>
            {/* Big text one liner */}
            <p className="home one-lnr" >Make staying organized easier, together.</p>
            <p className="home cta">Whether you're planning a trip to vegas with your friends. 
            Organizing game night with your family. Manage it all in one place with Groupley</p>
            {/* CTA below one liner */}
            {/* Learn More button. purpose TBD */}
            <BackgroundImage />
        </div>
    )
}

export default HomeLayout
