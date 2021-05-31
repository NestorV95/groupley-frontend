import React from 'react'

const AccountEditPasswordButton = ({toggle}) => {
    
    return (
        <button className="set-text set-btn set-opt"onClick={()=>toggle()}>Edit Password</button>
    )
}

export default AccountEditPasswordButton
