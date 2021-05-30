import React  from 'react'
import {useSelector} from 'react-redux'

import Loading from '../Shared/Loading.js'
import Logo from '../Shared/Logo/Logo.js'
import Groupley from '../Shared/Groupley/Groupley'
import MainMenu from '../Shared/MainMenu/MainMenu'
import GroupTiles from './Tiles/GroupTiles.js'

const GroupLayout = () => {
    const {loading} = useSelector(state => state.currentUserState)
    const {selectedGroup} = useSelector(state => state.groupState)

    return (
        <>
            <Logo />
            <Groupley />
            {loading?
                <Loading />
                :
                <div className="window">
                    <MainMenu />
                    {selectedGroup && <GroupTiles /> }
                </div>
            }
        </>
    )
}

export default GroupLayout
