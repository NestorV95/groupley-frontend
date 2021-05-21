import React from 'react'

const AccountSettingsButton = ({settings}) => {
    return (
      <button onClick={()=>settings()} >Account Settings</button>
    )
}

export default AccountSettingsButton
