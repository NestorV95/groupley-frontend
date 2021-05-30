import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import CurrentUserProfilePicture from './ProfilePicture/CurrentUserProfilePicture'
import MainMenuNavBar from './MMChildren/MainMenuNavBar'
import Notifications from './MMChildren/Notifications/Notifications'
import NotificationsButton from './MMChildren/Notifications/NotificationsButton'
import Settings from './MMChildren/Settings/Settings'
import SettingsButton from './MMChildren/Settings/SettingsButton'

import './MainMenu.css'


const MainMenu = () => {
    const [settings, setSettings] = useState(false)
    const [notifications, setNotifications] = useState(false)
    const {currentUser} = useSelector(state=>state.currentUserState)

    const setti = () =>{ setSettings(!settings) }
    const notos = () =>{ setNotifications(!notifications) }

    return (
        <div className="win-mm">

            <div className="mm-top">

                <SettingsButton settings={setti} />
                {settings === true? <Settings /> : null}

                {currentUser && <CurrentUserProfilePicture />}

                <NotificationsButton notifications={notos} />
                {notifications? <Notifications /> : null}

            </div>

            <MainMenuNavBar />
            
        </div>
    )
}

export default MainMenu
