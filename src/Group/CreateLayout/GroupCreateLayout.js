import React from 'react'
import {useSelector} from 'react-redux'

import Loading from '../../Shared/Loading.js'
import Logo from '../../Shared/Logo/Logo.js'
import Groupley from '../../Shared/Groupley/Groupley'
import MainMenu from '../../Shared/MainMenu/MainMenu'
import CreateTiles from './CreateTiles'

import '../Group.css'

const GroupCreateLayout = () => {
    const {loading, currentUser} = useSelector(state => state.currentUserState)

    return (
        <>
            <Logo />
            <Groupley />
            { currentUser === null && loading?
                <Loading />
                :
                <div className="window">
                    <MainMenu />
                    <CreateTiles />
                </div>
            }
        </>
    )
}

export default GroupCreateLayout
