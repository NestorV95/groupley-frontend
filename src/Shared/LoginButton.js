//------------------------------------------- packages -------------------------------------------//
import React,{useLayoutEffect, useState} from 'react'
//------------------------------------------ components ------------------------------------------//
import {Redirect} from 'react-router-dom'
//-------------------------------------------- styles --------------------------------------------//

//----------------------------------------- sign up form -----------------------------------------//
const LoginButton = () =>{
    const [logIn, setLogIn] = useState(false)

    useLayoutEffect(() => {
        setLogIn(false)
    }, [setLogIn])

    return(
        <div>
            { logIn ? 
                <Redirect to="/login"/> 
                : 
                <button onClick={()=>setLogIn(true)}>log in</button>
            }
        </div> 
    )
}

export default LoginButton