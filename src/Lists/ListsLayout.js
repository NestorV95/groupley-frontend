//------------------------------------------- packages -------------------------------------------//
import React from 'react'
import {useSelector} from 'react-redux'
import Loading from '../Shared/Loading.js'
import Logo from '../Shared/Logo/Logo.js'
//------------------------------------------ components ------------------------------------------//
import Groupley from '../Shared/Groupley/Groupley'
import MainMenu from '../Shared/MainMenu/MainMenu.js'
import ListsIndex from './Index/ListsIndex.js'
import ListView from './Show/ListView.js'
//-------------------------------------------- styles --------------------------------------------//
import './Lists.css'
//----------------------------------------- lists layout -----------------------------------------//
const ListsLayout = () => {
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
                    <ListView />   
                    <ListsIndex />
                </div>
            }
        </>
    )
}

export default ListsLayout
