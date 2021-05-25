import React  from 'react'
import Logo from '../Shared/Logo'
import MainMenu from '../Shared/MainMenu/MainMenu'

import GroupBanner from './GroupBanner'


const GroupLayout = () => {
    return (
        <div>
            <h1>Group Page</h1>
             {/* Logo top left corner */}
             <Logo />
             <MainMenu />
             <GroupBanner />
            
        </div>
    )
}

export default GroupLayout
