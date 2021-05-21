//------------------------------------------- packages -------------------------------------------//
import React from 'react'
//------------------------------------------ components ------------------------------------------//
import LoginForm from './LoginForm'
//-------------------------------------------- styles --------------------------------------------//

//----------------------------------------- login layout -----------------------------------------//
const LoginLayout = props => {
    return (
        <div>
            <h1>Login Page</h1>
            {/* Logo in top left corner */}
            <LoginForm props={props}/>
            {/* error handling on form */}
            {/* on valid redirects to dashboard */}
        </div>
    )
}

export default LoginLayout
