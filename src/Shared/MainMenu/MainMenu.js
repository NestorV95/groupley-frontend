import React, { useState } from 'react'
import CurrentUserProfilePicture from './ProfilePicture/CurrentUserProfilePicture'
import MainMenuNavBar from './MMChildren/MainMenuNavBar'
import Notifications from './MMChildren/Notifications/Notifications'
import NotificationsButton from './MMChildren/Notifications/NotificationsButton'
import Settings from './MMChildren/Settings/Settings'
import SettingsButton from './MMChildren/Settings/SettingsButton'

const MainMenu = () => {
    const [settings, setSettings] = useState(false)
    const [notifications, setNotifications] = useState(false)

    const setti = () =>{ setSettings(!settings) }
    const notos = () =>{ setNotifications(!notifications) }

    return (
        <div>
            <SettingsButton settings={setti} />
            {settings === true? <Settings /> : null}
            <NotificationsButton notifications={notos} />
            {notifications? <Notifications /> : null}
            <CurrentUserProfilePicture />
            <MainMenuNavBar />
        </div>
    )
}

export default MainMenu
