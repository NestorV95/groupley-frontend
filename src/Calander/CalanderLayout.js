//------------------------------------------- packages -------------------------------------------//
import React from 'react'
import Logo from '../Shared/Logo'
//------------------------------------------ components ------------------------------------------//
import MainMenu from '../Shared/MainMenu/MainMenu'
//-------------------------------------------- styles --------------------------------------------//

//--------------------------------------- calander layout ----------------------------------------//
const CalanderLayout = () => {
    return (
        <div>
            <h1>Calander Page</h1>
            <Logo />
            <MainMenu />
            {/* Big interactive Calander */}
            {/* Selected day column */}
                {/* has event details  */}
        </div>
    )
}

export default CalanderLayout
