import React,{useEffect, useState} from 'react'
import {useSelector} from 'react-redux'

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
        <p className="group-text">
            {status? 
                'You are currently a member of this group' 
                : 
                'You are not a member of this group'
            }
        </p>
    )
}

export default GroupMemStatus
