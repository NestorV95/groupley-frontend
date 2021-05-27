//------------------------------------------- packages -------------------------------------------//
import React from 'react'
//------------------------------------------ components ------------------------------------------//
import LoginButton from '../Shared/LoginButton'
import Groupley from '../Shared/Groupley/Groupley'
import Logo from '../Shared/Logo/Logo.js'
//-------------------------------------------- styles --------------------------------------------//

//----------------------------------------- home layout ------------------------------------------//
const HomeLayout = props => {
    return (
        <div>
            {/* Logo in top left corner */}
            <Logo />
            <Groupley />
            {/* Login button in top right corner. leads to /login  */}
            <LoginButton/>
            {/* Big text one liner */}
            <p></p>
            {/* CTA below one liner */}
            {/* Learn More button. purpose TBD */}
            {/* Some sort of art/image next to Text */}
        </div>
    )
}

export default HomeLayout
