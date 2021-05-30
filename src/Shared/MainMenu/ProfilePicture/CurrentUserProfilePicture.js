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
        <div className="mmpp-div">
            <img className="mmpp-img" src={currentUser.image} alt={currentUser.name}/>
            { edit ===true?
                <EditProfilePictureForm edit={editPicture} />
                :
                <EditProfilePictureButton edit={editPicture} />
            } 
        </div>
    )
}



export default CurrentUserProfilePicture
