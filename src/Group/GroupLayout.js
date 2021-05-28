import React  from 'react'
import {useSelector} from 'react-redux'

import Loading from '../Shared/Loading.js'
import Logo from '../Shared/Logo/Logo.js'
import Groupley from '../Shared/Groupley/Groupley'
import MainMenu from '../Shared/MainMenu/MainMenu'
import GroupBanner from './GroupBanner'
import LeaveGroupButton from './LeaveGroupButton'
import GroupMemStatus from './GroupMemStatus'
import JoinGroupButton from './JoinGroupButton'
import CreateGroup from './CreateGroup'
import GroupUsersList from './GroupUsersList'

const GroupLayout = () => {
    const {loading} = useSelector(state => state.currentUserState)

    return (
        <>
            <Logo />
            <Groupley />
            {loading?
                <Loading />
                :
                <div className="window">
                    <MainMenu />
                    <GroupBanner />
                    <GroupMemStatus />
                    <LeaveGroupButton />
                    <JoinGroupButton />
                    <CreateGroup />
                    <GroupUsersList />
                </div>
            }
        </>
    )
}

export default GroupLayout
