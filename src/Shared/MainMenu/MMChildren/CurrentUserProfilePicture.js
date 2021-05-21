import React from 'react'
import { useSelector } from 'react-redux'

const CurrentUserProfilePicture = () => {
    
    const currentUser = useSelector(state => state.currentUserState.currentUser)
    
    return (
        <div style={cuDiv}>
            <img style={cuImg} src={currentUser.image} alt={currentUser.name}/>
        </div>
    )
}

const cuDiv = {height: '10rem', width:'10rem'}
const cuImg = {height: '100%', width:'100%', border: '1px solid black', borderRadius: '50%'}

export default CurrentUserProfilePicture
