//------------------------------------------- packages -------------------------------------------//
import React from 'react'
import {useSelector} from 'react-redux'

//------------------------------------------ components ------------------------------------------//
import Loading from '../Shared/Loading'
import Logo from '../Shared/Logo'
import MainMenu from '../Shared/MainMenu/MainMenu'
import DashboardCurrentGroupTile from './DashboardCurrentGroupTile'
import DashboardGroupsTile from './DashboardGroupsTile'
import DashboardSummaryTile from './DashboardSummaryTile'
//-------------------------------------------- styles --------------------------------------------//

//--------------------------------------- dashboard layout ---------------------------------------//
const DashboardLayout = () => {
    const {loading} = useSelector(state => state.currentUserState)

    return (
        <>
            {loading !== false?
                <Loading />
                :
                <div>
                    <h1>Dashboard Page</h1>
                    {/* Logo top left corner */}
                    <Logo />
                    <MainMenu />
                    {/* Summary tile */}
                    <DashboardCurrentGroupTile />
                    <DashboardGroupsTile />
                    <DashboardSummaryTile />
                    {/* tiles tbd */} 
                </div>
            }
            
        </>
    )
}

export default DashboardLayout
