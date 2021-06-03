import React,{useState, useEffect} from 'react' //, {useState}
import { useSelector } from 'react-redux'

import EditGroupName from './EditGroupName'

const GroupName = () => {
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
        <div className="ban-top">
            <p className="group-text group-name">{selectedGroup.name}</p>
            { status? < EditGroupName /> : null }
        </div>
    )
}

export default GroupName
