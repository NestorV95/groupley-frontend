import React from 'react'

const AccountSettingsButton = ({settings}) => {
    return (
      <button className="set-text set-btn set-opt" onClick={()=>settings()} >Account Settings</button>
    )
}

export default AccountSettingsButton
