import React from 'react'

import GroupBanner from './Banner/GroupBanner'
import GroupMembership from './Membership/GroupMembership'
import CreateGroup from './Create/CreateGroup'
import GroupUsersList from './Users/GroupUsersList'

const GroupTiles = () => {
    
    return (
        <div className="win-tiles">
            < GroupBanner />
            < GroupMembership />
            < CreateGroup/>
            < GroupUsersList />
        </div>
    )
}

export default GroupTiles
