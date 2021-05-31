import React from 'react'
import { useSelector } from 'react-redux'

const GroupCode = () => {
    const  {selectedGroup} = useSelector(state => state.groupState)
    return (
        <div className="ban-bot">
            <p className="group-text group-code" ># { selectedGroup.code }</p>
        </div>
    )
}

export default GroupCode
