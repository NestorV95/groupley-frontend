import React from 'react'
import {useDispatch} from 'react-redux'

import {isLoggedOut} from '../../../../../redux/actions/isLoggedActions'

const LogOutButton = () => {

    const dispatch = useDispatch()

    const logOut = () => {
        dispatch(isLoggedOut())
        localStorage.clear()
    }

    return ( 
        <button onClick={()=>logOut()}>Log Out</button> 
    )
}

export default LogOutButton
