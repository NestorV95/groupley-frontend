//------------------------------------------- packages -------------------------------------------//
import React from 'react'
import {useSelector} from 'react-redux'
//------------------------------------------ components ------------------------------------------//
import Loading from '../Shared/Loading'
import Logo from '../Shared/Logo/Logo.js'
import Groupley from '../Shared/Groupley/Groupley'
import MainMenu from '../Shared/MainMenu/MainMenu'
import DashboardCurrentGroupTile from './DashboardCurrentGroupTile'
import DashboardGroupsTile from './DashboardGroupsTile'
import DashboardSummaryTile from './DashboardSummaryTile'
//-------------------------------------------- styles --------------------------------------------//

//--------------------------------------- dashboard layout ---------------------------------------//
const DashboardLayout = () => {
    const {loading, currentUser} = useSelector(state => state.currentUserState)

    return (
        <>
            <Logo />
            <Groupley />
            {loading?
                <Loading />
                :
                <div className="window" >
                    <MainMenu />
                    {currentUser && <DashboardCurrentGroupTile />}
                    {currentUser && <DashboardGroupsTile />}
                    {currentUser && <DashboardSummaryTile />}
                    {/* tiles tbd */} 
                </div>
            } 
        </>
    )
}

export default DashboardLayout
