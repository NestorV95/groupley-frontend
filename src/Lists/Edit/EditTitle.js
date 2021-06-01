import React, { useState } from 'react'
import {FaPencilAlt} from 'react-icons/fa'

import EditTitleForm from './EditTitleForm'


const EditTitle = () => {
    const [edit, setEdit] = useState(false)

    const togEdit = () => {
        setEdit(!edit)
    }

    return (
        <div className="tool-edit">
           {edit?
                <EditTitleForm toggle={togEdit}/>
                :
                <FaPencilAlt className="list-icon list-pen" onClick={()=> togEdit()}/>
            }
        </div>
    )
}

export default EditTitle
