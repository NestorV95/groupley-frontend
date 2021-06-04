import React from 'react'
import {useSelector} from 'react-redux'

import JoinGroupButton from './JoinGroupButton'
import LeaveGroupButton from './LeaveGroupButton'

const GroupMemStatus = () => {
    const {currentUser} = useSelector(state => state.currentUserState)
    const {selectedGroup} = useSelector(state => state.groupState)

    return (
        <div className ="mem-inner">
            {selectedGroup.users.includes(user=> user.id === currentUser.id)? 
                <>
                    <p className="group-text" >You are currently a member of this group</p>
                    <LeaveGroupButton /> 
                </>
                :
                <>
                    <p className="group-text" >You are not a member of this group</p>
                    <JoinGroupButton />
                </>
                
            }
        </div>
    )
}

export default GroupMemStatus
