//------------------------------------------- packages -------------------------------------------//
import React from 'react'
//------------------------------------------ components ------------------------------------------//
import LoginButton from '../Shared/LoginButton'
import Groupley from '../Shared/Groupley/Groupley'
import Logo from '../Shared/Logo/Logo.js'
import BackgroundImage from '../Shared/BackgroundImage/BackgroundImage'
//-------------------------------------------- styles --------------------------------------------//

//------------------------------------- Unauthorized layout --------------------------------------//
const UnauthorizedLayout = () => {
    return (
        <div>
            <LoginButton />
            <Groupley />
            <Logo />
            <BackgroundImage />
            <p>please login to enter</p>
        </div>
    )
}

export default UnauthorizedLayout
