//------------------------------------------- packages -------------------------------------------//
import React from 'react'
import {Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'
//------------------------------------------ components ------------------------------------------//
import Logo from '../Shared/Logo/Logo.js'
import Groupley from '../Shared/Groupley/Groupley'
import BackgroundImage from '../Shared/BackgroundImage/BackgroundImage'
import LoginForm from './Form/LoginForm'
//-------------------------------------------- styles --------------------------------------------//

//----------------------------------------- login layout -----------------------------------------//
const LoginLayout = () => {
    const  { status } = useSelector( state => state.authState )
    return(
        <>
            { status ? <Redirect to="/dashboard" /> : null }
            <div>
                <Logo />
                <Groupley />
                <BackgroundImage />
                <LoginForm />
            </div>
        </>
    )
}

export default LoginLayout
