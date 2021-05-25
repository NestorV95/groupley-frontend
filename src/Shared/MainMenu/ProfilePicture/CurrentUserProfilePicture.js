import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import EditProfilePictureButton from './EditProfilePictureButton'
import EditProfilePictureForm from './EditProfilePictureForm'

const CurrentUserProfilePicture = () => {
    const [edit, setEdit] = useState(false)
    
    const currentUser = useSelector(state => state.currentUserState.currentUser)

    const editPicture = () => {

        setEdit(!edit)
        
    }
    
    return (
        <div style={cuDiv}>
            <img style={cuImg} src={currentUser.image} alt={currentUser.name}/>
            { edit ===true?
                <EditProfilePictureForm edit={editPicture} />
                :
                <EditProfilePictureButton edit={editPicture} />
            } 
        </div>
    )
}

const cuDiv = {height: '10rem', width:'10rem'}
const cuImg = {height: '100%', width:'100%', border: '1px solid black', borderRadius: '50%'}

export default CurrentUserProfilePicture
