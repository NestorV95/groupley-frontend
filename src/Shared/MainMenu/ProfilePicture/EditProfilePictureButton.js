import React from 'react'
import {FaUpload} from 'react-icons/fa'

const EditProfilePictureButton = ({edit}) => {

    return (
        <FaUpload className="mm-icon pp-ebtn" onClick={()=>edit()}/>
    )
    
}

export default EditProfilePictureButton
