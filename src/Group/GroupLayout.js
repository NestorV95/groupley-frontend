import React  from 'react'
import Logo from '../Shared/Logo'
import MainMenu from '../Shared/MainMenu/MainMenu'

import GroupBanner from './GroupBanner'
import LeaveGroupButton from './LeaveGroupButton'
import GroupMemStatus from './GroupMemStatus'
import JoinGroupButton from './JoinGroupButton'
import CreateGroup from './CreateGroup'



const GroupLayout = () => {
    return (
        <div>
            <h1>Group Page</h1>
            {/* Logo top left corner */}
            <Logo />
            <MainMenu />
            <GroupBanner />
            <GroupMemStatus />
            <LeaveGroupButton />
            <JoinGroupButton />
            <CreateGroup />
            
        </div>
    )
}

export default GroupLayout
