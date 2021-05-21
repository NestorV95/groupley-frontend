import React from 'react'

const GroupSettingsButton = ({settings}) => {
    return (
        <button onClick={()=>settings()}>Group Settings</button>
    )
}

export default GroupSettingsButton
