import React, {useState} from 'react'
import {FaPencilAlt} from 'react-icons/fa'

import GroupNameEditForm from './GroupNameEditForm'

const EditGroupName = () => {

    const [edit, setEdit] = useState(false)

    const toggle = () =>{
        setEdit(!edit)
    } 

    return (
        <>
            {edit?
                <GroupNameEditForm  />
                :
                <FaPencilAlt onClick={()=>toggle()}/>
            }
        </>
    )

}

export default EditGroupName
