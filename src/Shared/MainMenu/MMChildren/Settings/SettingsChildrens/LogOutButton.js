import React from 'react'
import {useDispatch} from 'react-redux'

import loggedStatus from '../../../../../redux/actions/auth/loggedStatus'

const LogOutButton = () => {

    const dispatch = useDispatch()

    const logOut = () => {
        dispatch(loggedStatus(false))
        localStorage.clear()
    }

    return ( 
        <button onClick={()=>logOut()}>Log Out</button> 
    )
}

export default LogOutButton
