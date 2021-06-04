import React from 'react'
import {useSelector} from 'react-redux'

import GroupBanner from './Banner/GroupBanner'
import GroupMembership from './Membership/GroupMembership'
import GroupUsersList from './Users/GroupUsersList'

const GroupTiles = () => {
    const {selectedStatus, selectedGroup} = useSelector(state => state.groupState)
    return (
        <div className="win-tiles">
            { selectedGroup.name !== null && selectedStatus ? < GroupBanner /> : null}
            { selectedGroup.users !== null && selectedStatus ? < GroupMembership /> : null}
            { selectedGroup.users !== null && selectedStatus ? < GroupUsersList /> : null }
        </div>
    )
}

export default GroupTiles
