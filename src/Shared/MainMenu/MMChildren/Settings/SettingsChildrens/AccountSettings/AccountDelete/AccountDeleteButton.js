import React from 'react'

const AccountDeleteButton = ({destroy}) => {
    return (
        <button onClick={()=>destroy()}>Delete Account</button>
    )
}

export default AccountDeleteButton
