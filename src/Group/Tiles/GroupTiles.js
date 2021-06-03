import React from 'react'
import {useSelector} from 'react-redux'

import GroupBanner from './Banner/GroupBanner'
import GroupMembership from './Membership/GroupMembership'
import GroupUsersList from './Users/GroupUsersList'

const GroupTiles = () => {
    const {selectedStatus} = useSelector(state => state.groupState)
    return (
        <div className="win-tiles">
            { selectedStatus ? < GroupBanner /> : null}
            { selectedStatus ? < GroupMembership /> : null}
            { selectedStatus ? < GroupUsersList /> : null }
        </div>
    )
}

export default GroupTiles
