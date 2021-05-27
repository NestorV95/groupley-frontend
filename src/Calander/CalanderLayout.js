//------------------------------------------- packages -------------------------------------------//
import React from 'react'

//------------------------------------------ components ------------------------------------------//
import Logo from '../Shared/Logo/Logo.js'
import Groupley from '../Shared/Groupley/Groupley'
import MainMenu from '../Shared/MainMenu/MainMenu'

//-------------------------------------------- styles --------------------------------------------//

//--------------------------------------- calander layout ----------------------------------------//
const CalanderLayout = () => {
    return (
        <div>
            <h1>Calander Page</h1>
            <Logo />
            <Groupley />
            <MainMenu />
            {/* Big interactive Calander */}
            {/* Selected day column */}
                {/* has event details  */}
        </div>
    )
}

export default CalanderLayout
