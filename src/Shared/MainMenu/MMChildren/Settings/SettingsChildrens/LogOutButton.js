import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import {authStatus} from '../../../../../redux/actions/auth/authStatus'

const LogOutButton = () => {
    const dispatch = useDispatch()

    const logOut = () => {  
        localStorage.clear()
        dispatch(authStatus())
        dispatch({type:'CLEAR_USER'})
    }

    return ( 
        <Link to="/" className="set-text set-btn set-opt" onClick={()=>logOut()}>Log Out</Link> 
    )
}

export default LogOutButton
