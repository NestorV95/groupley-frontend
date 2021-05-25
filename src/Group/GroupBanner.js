import React from 'react'
import { useSelector } from 'react-redux'

const GroupBanner = () => {
    const  {selectedGroup} = useSelector(state => state.groupState)
    return (
        <div>
            <h1>{selectedGroup.name}</h1>
            <p># {selectedGroup.code}</p>
        </div>
    )
}

export default GroupBanner
