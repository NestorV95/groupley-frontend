import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import updateGroup from '../redux/actions/groups/selectedGroup/updateGroup'

const GroupNameEditForm = () => {
    const [newName,setName] = useState('')
    const dispatch = useDispatch()

    const editName = () => {
        const log = {name: newName}
        dispatch(updateGroup(log))
    }

    return (
        <div>
            <input type="text" value={newName} onChange={(e)=>setName(e.target.value)}/>
            <button onClick={()=>editName()}>edit name</button>
        </div>
    )
}

export default GroupNameEditForm
