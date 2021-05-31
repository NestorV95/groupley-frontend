import React from 'react'

const AccountEditNameButton = ({toggle}) => {
    return (
        <button className="set-text set-btn set-opt" onClick={()=>toggle()}>Edit Name</button>
    )
}

export default AccountEditNameButton
