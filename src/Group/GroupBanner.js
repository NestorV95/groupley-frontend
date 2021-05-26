import React from 'react'
import { useSelector } from 'react-redux'
import GroupName from './GroupName'

const GroupBanner = () => {
    const  {selectedGroup} = useSelector(state => state.groupState)
    return (
        <div>
            <GroupName />
            <p># {selectedGroup.code}</p>
        </div>
    )
}

export default GroupBanner
