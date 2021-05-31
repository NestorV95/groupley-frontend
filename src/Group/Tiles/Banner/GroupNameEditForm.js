import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import updateGroup from '../../../redux/actions/groups/selectedGroup/updateGroup'

const GroupNameEditForm = ({toggle}) => {
    const [newName,setName] = useState('')
    const dispatch = useDispatch()

    const editName = () => {
        const log = {name: newName}
        dispatch(updateGroup(log))
    }

    return (
        <div className="name-form">
            <input className="name-input" type="text" value={newName} onChange={(e)=>setName(e.target.value)} placeholder="Group Name"/>
            <button className="group-text group-btn name-edit" onClick={ () => editName() }>Update</button>
            <button className="group-text group-icon name-exit" onClick={ () => toggle() }>X</button>
        </div>
    )
}

export default GroupNameEditForm
