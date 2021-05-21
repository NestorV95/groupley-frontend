//------------------------------------------- packages -------------------------------------------//
import React from 'react'
//------------------------------------------ components ------------------------------------------//
import MainMenu from '../Shared/MainMenu/MainMenu.js'
import ListsIndex from './ListsIndex.js'
import ListView from './ListView.js'
//-------------------------------------------- styles --------------------------------------------//

//----------------------------------------- lists layout -----------------------------------------//
const ListsLayout = () => {
    return (
        <div>
            <h1>Lists Page</h1>
            {/* Logo top left corner */}
            <MainMenu />
            {/* displayed List */}
            <ListView />   
            {/* Listseption */}
            <ListsIndex />
        </div>
    )
}

export default ListsLayout
