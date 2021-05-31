import React from 'react'

const GroupSettingsButton = ({settings}) => {
    return (
        <button className="set-text set-btn" onClick={()=>settings()}>Group Settings</button>
    )
}

export default GroupSettingsButton
