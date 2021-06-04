import React from 'react' 
import { useSelector } from 'react-redux'

import EditGroupName from './EditGroupName'

const GroupName = () => {
    const {currentUser} = useSelector(state => state.currentUserState)
    const {selectedGroup} = useSelector(state => state.groupState)

    return (
        <div className="ban-top">
            <p className="group-text group-name">{selectedGroup.name}</p>
            {selectedGroup.users.find(user=> user.id === currentUser.id) ? 
                < EditGroupName /> 
                : 
                null 
            }
        </div>
    )
}

export default GroupName
