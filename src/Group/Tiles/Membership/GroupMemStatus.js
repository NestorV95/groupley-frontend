import React,{useEffect, useState} from 'react'
import {useSelector} from 'react-redux'

import JoinGroupButton from './JoinGroupButton'
import LeaveGroupButton from './LeaveGroupButton'

const GroupMemStatus = () => {
    const [status, setStatus] = useState(false)
    const {currentUser} = useSelector(state => state.currentUserState)
    const {selectedGroup} = useSelector(state => state.groupState)

    useEffect(() => {
        selectedGroup.users.filter(user=> user.id === currentUser.id)?
            setStatus(true)
            :
            setStatus(false)
        // eslint-disable-next-line     
    }, [selectedGroup])

    return (
        <div className ="mem-inner">
            {status? 
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
