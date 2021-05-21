//------------------------------------------- packages -------------------------------------------//
import React from 'react'
//------------------------------------------ components ------------------------------------------//
import LoginButton from '../Shared/LoginButton'
//-------------------------------------------- styles --------------------------------------------//

//----------------------------------------- home layout ------------------------------------------//
const HomeLayout = props => {
    return (
        <div>
            <h1>Home Page</h1>
            {/* Logo in top left corner */}
            {/* Login button in top right corner. leads to /login  */}
            <LoginButton/>
            {/* Big text one liner */}
            {/* CTA below one liner */}
            {/* Learn More button. purpose TBD */}
            {/* Some sort of art/image next to Text */}
        </div>
    )
}

export default HomeLayout
