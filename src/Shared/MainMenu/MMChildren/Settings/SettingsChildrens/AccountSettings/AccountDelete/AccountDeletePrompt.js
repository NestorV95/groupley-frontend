import React from 'react'

const AccountDeletePrompt = ({confirm, cancel}) => {
    return (
        <div>
            <p className="set-text set-prompt"> Are you sure you would like to permanently delete your account? </p><br/>
            <button className="set-text set-btn set-ibtn" onClick={()=>cancel()}>Cancel Deletion</button>
            <button className="set-text set-btn set-ibtn" onClick={()=>confirm()}>Delete My Account</button>
        </div>
    )
}

export default AccountDeletePrompt
