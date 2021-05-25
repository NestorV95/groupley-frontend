//------------------------------------------- packages -------------------------------------------//
import React from 'react'
import Logo from '../Shared/Logo'
//------------------------------------------ components ------------------------------------------//
import LoginForm from './LoginForm'
//-------------------------------------------- styles --------------------------------------------//

//----------------------------------------- login layout -----------------------------------------//
const LoginLayout = props => {
    return (
        <div>
            <h1>Login Page</h1>
            {/* Logo in top left corner */}
            <Logo />
            <LoginForm props={props}/>
            {/* error handling on form */}
            {/* on valid redirects to dashboard */}
        </div>
    )
}

export default LoginLayout
