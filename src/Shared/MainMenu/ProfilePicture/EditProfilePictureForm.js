import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {FaUpload} from 'react-icons/fa'
import UpdateUser from '../../../redux/actions/currentUser/UpdateUser'

const EditProfilePictureForm = ({edit}) =>{

    const [picture, setPicture] = useState('')

    const dispatch = useDispatch()

    const updatePicture = () => {
        const log= {image : picture}
        dispatch(UpdateUser(log))
    }
     
    return (

        <>
            <FaUpload className="mm-icon pp-ebtn" onClick={()=>updatePicture()}/><br/>
            <div className="pp-ediv">
                <input className="pp-inp" value={picture} onChange={(e)=>setPicture(e.target.value)} placeholder='Image Url'/>
                <button className="pp-exit" onClick={()=>edit()}>X</button>
            </div>
            

        </>

    )

}

export default EditProfilePictureForm