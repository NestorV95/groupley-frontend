import React from 'react'

const AccountEditButton = ({edit}) => {
    return (
        <button className="set-text set-btn set-opt" onClick={()=>edit()}>Edit Account</button>
    )
}

export default AccountEditButton
