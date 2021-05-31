import React from 'react' //, {useState}
import { useSelector } from 'react-redux'

import EditGroupName from './EditGroupName'

const GroupName = () => {
    const  {selectedGroup} = useSelector(state => state.groupState)
    
    return (
        <div className="ban-top">
            <p className="group-text group-name">{selectedGroup.name}</p>
            < EditGroupName />
        </div>
    )
}

export default GroupName
