import React from 'react'
import CurrentUserProfilePicture from './CurrentUserProfilePicture'
import MainMenuNavBar from './MainMenuNavBar'
import NotificationsButton from './NotificationsButton'
import SettingsButton from './SettingsButton'

const MainMenu = () => {
    return (
        <div>
             {/* Settings button. leads to edit form */}
            <SettingsButton />
            {/* Notifications button */}
            <NotificationsButton />
            {/* Profile picture */}
            <CurrentUserProfilePicture />
            {/* Links to /dashboard, /calander, /messages, /lists, budget */}
            <MainMenuNavBar />
        </div>
    )
}

export default MainMenu
