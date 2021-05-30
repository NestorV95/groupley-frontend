//------------------------------------------- packages -------------------------------------------//
import React from 'react'
import {useSelector} from 'react-redux'
//------------------------------------------ components ------------------------------------------//
import Logo from '../Shared/Logo/Logo.js'
import Groupley from '../Shared/Groupley/Groupley'
import MainMenu from '../Shared/MainMenu/MainMenu'
//-------------------------------------------- styles --------------------------------------------//

//--------------------------------------- calander layout ----------------------------------------//
const CalanderLayout = () => {
    const {loading} = useSelector(state => state.currentUserState)

    return (
        <>
            < Logo />
            < Groupley />
            { loading ?
                < loading />
                :
                <div className="window" >
                    < MainMenu />
                    {/* Big interactive Calander */}
                    {/* Selected day column */}
                    {/* has event details  */}
                </div> 
            } 
        </>
    )
}

export default CalanderLayout
