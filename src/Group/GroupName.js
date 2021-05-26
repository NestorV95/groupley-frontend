import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import {FaPencilAlt} from 'react-icons/fa'

import GroupNameEditForm from './GroupNameEditForm' 
// import updateGroup from '..redux/'

const GroupName = () => {
    const [edit, setEdit] = useState(false)
    const  {selectedGroup} = useSelector(state => state.groupState)
    // const dispatch = useDispatch()

    const toggle = () =>{
        setEdit(!edit)
    } 
    
    return (
        <>
        <h1>{selectedGroup.name} </h1>
        {edit?
            <GroupNameEditForm  />
            :
            <FaPencilAlt onClick={()=>toggle()}/>

        }
        
        
        </>
    )
}

export default GroupName
