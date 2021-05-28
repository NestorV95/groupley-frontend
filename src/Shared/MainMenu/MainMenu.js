import React, { useState } from 'react'

import CurrentUserProfilePicture from './ProfilePicture/CurrentUserProfilePicture'
import MainMenuNavBar from './MMChildren/MainMenuNavBar'
import Notifications from './MMChildren/Notifications/Notifications'
import NotificationsButton from './MMChildren/Notifications/NotificationsButton'
import Settings from './MMChildren/Settings/Settings'
import SettingsButton from './MMChildren/Settings/SettingsButton'

import './MainMenu.css'
import { useSelector } from 'react-redux'

const MainMenu = () => {
    const [settings, setSettings] = useState(false)
    const [notifications, setNotifications] = useState(false)
    const {currentUser} = useSelector(state=>state.currentUserState)

    const setti = () =>{ setSettings(!settings) }
    const notos = () =>{ setNotifications(!notifications) }

    return (
        <div className="mm-div">
            <SettingsButton settings={setti} />
            {settings === true? <Settings /> : null}
            <NotificationsButton notifications={notos} />
            {notifications? <Notifications /> : null}
            {currentUser && <CurrentUserProfilePicture />}
            <MainMenuNavBar />
        </div>
    )
}

export default MainMenu
