import React from 'react'

const AccountDeleteButton = ({destroy}) => {
    return (
        <button className="set-text set-btn set-opt" onClick={()=>destroy()}>Delete Account</button>
    )
}

export default AccountDeleteButton
