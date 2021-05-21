import React from 'react'

const AccountDeletePrompt = ({confirm, cancel}) => {
    return (
        <div>
            <p> Are you sure you would like to permanently delete your account? </p><br/>
            <button onClick={()=>cancel()}>Cancel Account Deletion</button>
            <button onClick={()=>confirm()}>Delete My Account</button>
        </div>
    )
}

export default AccountDeletePrompt
