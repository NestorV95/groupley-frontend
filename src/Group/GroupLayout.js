import React from 'react'
import {useSelector} from 'react-redux'

import Loading from '../Shared/Loading.js'
import Logo from '../Shared/Logo/Logo.js'
import Groupley from '../Shared/Groupley/Groupley'
import MainMenu from '../Shared/MainMenu/MainMenu'
import GroupTiles from './Tiles/GroupTiles.js'

import './Group.css'

const GroupLayout = () => {
    const {loading} = useSelector(state => state.currentUserState)
 
    return (
        <>
            <Logo />
            <Groupley />
            { loading?
                <Loading />
                :
                <div className="window">
                    <MainMenu />
                    <GroupTiles /> 
                </div>
            }
        </>
    )
}

export default GroupLayout
