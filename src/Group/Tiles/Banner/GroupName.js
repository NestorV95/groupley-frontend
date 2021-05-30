import React from 'react' //, {useState}
import { useSelector } from 'react-redux'

import EditGroupName from './EditGroupName'

const GroupName = () => {
    const  {selectedGroup} = useSelector(state => state.groupState)
    
    return (
        <>
        <h1>{selectedGroup.name} </h1>
         < EditGroupName />
        </>
    )
}

export default GroupName
