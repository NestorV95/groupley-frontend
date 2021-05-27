import React  from 'react'
import Logo from '../Shared/Logo/Logo.js'
import MainMenu from '../Shared/MainMenu/MainMenu'

import Groupley from '../Shared/Groupley/Groupley'
import GroupBanner from './GroupBanner'
import LeaveGroupButton from './LeaveGroupButton'
import GroupMemStatus from './GroupMemStatus'
import JoinGroupButton from './JoinGroupButton'
import CreateGroup from './CreateGroup'
import GroupUsersList from './GroupUsersList'

const GroupLayout = () => {
    return (
        <div>
            <h1>Group Page</h1>
            {/* Logo top left corner */}
            <Logo />
            <Groupley />
            <MainMenu />
            <GroupBanner />
            <GroupMemStatus />
            <LeaveGroupButton />
            <JoinGroupButton />
            <CreateGroup />
            {/* List of group users */}
            <GroupUsersList />

            
        </div>
    )
}

export default GroupLayout
