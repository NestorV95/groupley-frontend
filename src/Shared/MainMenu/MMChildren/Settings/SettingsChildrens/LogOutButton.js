import React from 'react'
import {useDispatch} from 'react-redux'

import {authStatus} from '../../../../../redux/actions/auth/authStatus'

const LogOutButton = () => {

    const dispatch = useDispatch()

    const logOut = () => {  
        localStorage.clear()
        dispatch(authStatus())
    }

    return ( 
        <button className="set-text set-btn set-opt" onClick={()=>logOut()}>Log Out</button> 
    )
}

export default LogOutButton
