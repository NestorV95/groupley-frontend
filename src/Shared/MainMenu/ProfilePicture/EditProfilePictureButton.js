import React from 'react'
import {FaUpload} from 'react-icons/fa'

const EditProfilePictureButton = ({edit}) => {

    return (
        <FaUpload onClick={()=>edit()}/>
    )
    
}

export default EditProfilePictureButton
