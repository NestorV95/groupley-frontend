//------------------------------------------- packages -------------------------------------------//
import React from 'react'
import {useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'
//------------------------------------------ components ------------------------------------------//
import LoginButton from '../Shared/LoginButton'
import Groupley from '../Shared/Groupley/Groupley'
import BackgroundImage from '../Shared/BackgroundImage/BackgroundImage'
import Logo from '../Shared/Logo/Logo.js'
import SignUpForm from './Form/SignUpForm'
//-------------------------------------------- styles --------------------------------------------//

//---------------------------------------- sign up layout ----------------------------------------//
const SignUpLayout = () => {
    const  { status } = useSelector( state => state.authState )
    
    return (
        <>
            { status? <Redirect to="/dashboard" /> : null }
            <div>
                <Logo />
                <Groupley />
                <BackgroundImage />
                <LoginButton />
                <SignUpForm />
            </div>
        </>
    )
}

export default SignUpLayout
