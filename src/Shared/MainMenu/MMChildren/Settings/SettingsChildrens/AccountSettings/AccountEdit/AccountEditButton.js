import React from 'react'

const AccountEditButton = ({edit}) => {
    return (
        <button onClick={()=>edit()}>Edit Account</button>
    )
}

export default AccountEditButton
