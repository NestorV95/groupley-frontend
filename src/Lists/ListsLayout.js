//------------------------------------------- packages -------------------------------------------//
import React from 'react'
import {useSelector} from 'react-redux'
import Loading from '../Shared/Loading.js'
import Logo from '../Shared/Logo.js'
//------------------------------------------ components ------------------------------------------//
import MainMenu from '../Shared/MainMenu/MainMenu.js'
import ListsIndex from './ListsIndex.js'
import ListView from './ListView.js'
//-------------------------------------------- styles --------------------------------------------//

//----------------------------------------- lists layout -----------------------------------------//
const ListsLayout = () => {
    const {loading} = useSelector(state => state.currentUserState)
    return (
        <>
            { loading !== false?
                <Loading />
                :
                <div>
                    <h1>Lists Page</h1>
                    {/* Logo top left corner */}
                    <Logo />
                    <MainMenu />
                    {/* displayed List */}
                    <ListView />   
                    {/* Listseption */}
                    <ListsIndex />
                </div>
            }
        </>
    )
}

export default ListsLayout
