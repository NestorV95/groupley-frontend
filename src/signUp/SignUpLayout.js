//------------------------------------------- packages -------------------------------------------//
import React from 'react'
//------------------------------------------ components ------------------------------------------//
import LoginButton from '../Shared/LoginButton'
import Groupley from '../Shared/Groupley/Groupley'
import Logo from '../Shared/Logo/Logo.js'
import SignUpForm from './SignUpForm'
//-------------------------------------------- styles --------------------------------------------//

//---------------------------------------- sign up layout ----------------------------------------//
const SignUpLayout = () => {
    return (
        <div>
            <h1> Sign Up Page</h1>
            {/* Logo in top left corner */}
            <Logo />
            <Groupley />
            {/* Login in top right corner */}
            <LoginButton />
            {/* Sign up form dead center of form */}
            <SignUpForm />
            {/* error handling on form */}
            {/* on valid redirects to dashboard */}
        </div>
    )
}

export default SignUpLayout
