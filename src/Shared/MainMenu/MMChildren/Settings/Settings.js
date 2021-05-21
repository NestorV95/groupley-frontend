import React, { useState } from 'react'
import AccountSettings from './SettingsChildrens/AccountSettings/AccountSettings'

import AccountSettingsButton from './SettingsChildrens/AccountSettings/AccountSettingsButton'
import GroupSettings from './SettingsChildrens/GroupSettings/GroupSettings'
import GroupSettingsButton from './SettingsChildrens/GroupSettings/GroupSettingsButton'
import LogOutButton from './SettingsChildrens/LogOutButton'

const Settings = () => {
    const [account, setAccount] = useState(false)
    const [group, setGroup] = useState(false)

    const acct = () => { 
        setAccount(!account)
        setGroup(false)
    }
    const grou = () => {
        setGroup(!group)
        setAccount(false)
    }
    return (
        <div>
            settings div
            {/* account settings button */}
            <AccountSettingsButton settings={acct}/>
            {account? <AccountSettings/> : null}
            {/* group settings button */}
            <GroupSettingsButton settings={grou}/>
            {group? <GroupSettings/> : null }
            {/* logout button */}
            <LogOutButton />
        </div>
    )
}

export default Settings
