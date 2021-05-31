//------------------------------------------- packages -------------------------------------------//
import React from 'react'
import {useSelector} from 'react-redux'
//------------------------------------------ components ------------------------------------------//
import Loading from '../Shared/Loading'
import Logo from '../Shared/Logo/Logo.js'
import Groupley from '../Shared/Groupley/Groupley'
import MainMenu from '../Shared/MainMenu/MainMenu'
import DashboardTiles from './Tiles/DashboardTiles'
//-------------------------------------------- styles --------------------------------------------//
import './Dashboard.css'
//--------------------------------------- dashboard layout ---------------------------------------//
const DashboardLayout = () => {
    const {loading} = useSelector(state => state.currentUserState)

    return (
        <>
            < Logo />
            < Groupley />
            { loading ?
                <Loading />
                :
                <div className="window" >
                    <MainMenu />
                    <DashboardTiles />
                </div>
            } 
        </>
    )
}

export default DashboardLayout
