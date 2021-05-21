import React, { useState } from 'react'
import CurrentUserProfilePicture from './MMChildren/CurrentUserProfilePicture'
import MainMenuNavBar from './MMChildren/MainMenuNavBar'
import Notifications from './MMChildren/Notifications'
import NotificationsButton from './MMChildren/NotificationsButton'
import Settings from './MMChildren/Settings'
import SettingsButton from './MMChildren/SettingsButton'

const MainMenu = () => {

    const [settings, setSettings] = useState(false)
    const [notifications, setNotifications] = useState(false)

    const setti = () =>{
        setSettings(!settings)
    }

    const notos = () =>{
        setNotifications(!notifications)
    }

    return (
        <div>
             {/* Settings button */}
            <SettingsButton settings={setti} />
            {settings === true? <Settings /> : null}
            {/* Notifications button */}
            <NotificationsButton notifications={notos} />
            {notifications? <Notifications /> : null}
            {/* Profile picture */}
            <CurrentUserProfilePicture />
            {/* Links to /dashboard, /calander, /messages, /lists, budget */}
            <MainMenuNavBar />
        </div>
    )
}

export default MainMenu
