import React from 'react'

import GroupMemStatus from './GroupMemStatus'
import JoinGroupButton from './JoinGroupButton'
import LeaveGroupButton from './LeaveGroupButton'

const GroupMembership = () => {
    return (
        <div className="group-tile membership">
            <GroupMemStatus />
            <JoinGroupButton />
            <LeaveGroupButton />
        </div>
    )
}

export default GroupMembership
