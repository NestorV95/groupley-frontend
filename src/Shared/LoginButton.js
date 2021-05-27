//------------------------------------------- packages -------------------------------------------//
import React,{useLayoutEffect, useState} from 'react'
//------------------------------------------ components ------------------------------------------//
import {Redirect} from 'react-router-dom'
//-------------------------------------------- styles --------------------------------------------//
import '../styles/Login.css'
//----------------------------------------- sign up form -----------------------------------------//
const LoginButton = () =>{
    const [logIn, setLogIn] = useState(false)

    useLayoutEffect(() => {
        setLogIn(false)
    }, [setLogIn])

    return(
        <>
            { logIn ? 
                <Redirect to="/login"/> 
                : 
                <button className="login-btn" onClick={ () => setLogIn( true ) } >log in</button>
            }
        </>
    )
}

export default LoginButton