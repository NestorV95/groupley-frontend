import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import UpdateUser from '../../../redux/actions/currentUser/UpdateUser'

const EditProfilePictureForm = ({edit}) =>{

    const [picture, setPicture] = useState('')

    const dispatch = useDispatch()

    const updatePicture = () => {
        const log= {image : picture}
        dispatch(UpdateUser(log))
    }
     
    return (

        <div>
            
            <input value={picture} onChange={(e)=>setPicture(e.target.value)} placeholder='picture' /> <br/>
            <button onClick={()=>updatePicture()}>sign up</button>
            <button onClick={()=>edit()}>X</button>

        </div>

    )

}

export default EditProfilePictureForm