import React from 'react'
import {FaUpload} from 'react-icons/fa'

const EditProfilePictureButton = ({edit}) => {

    return (
        <FaUpload className="mm-icon" onClick={()=>edit()}/>
    )
    
}

export default EditProfilePictureButton
