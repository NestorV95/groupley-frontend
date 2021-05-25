import React from 'react'
import {useSelector} from 'react-redux'

const DashboardCurrentGroupTile = () => {
    const {selectedGroup} = useSelector(state => state.groupState)

    return (
        <div>
            <h1>{selectedGroup.name}</h1>

        
        </div>
    )
}

export default DashboardCurrentGroupTile
