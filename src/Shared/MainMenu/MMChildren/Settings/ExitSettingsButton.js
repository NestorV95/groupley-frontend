import React from 'react'

const ExitSettingsButton = ({exit}) => {

    return (
        <button className="set-text set-btn set-exit"  onClick={ ()=> exit() } >X</button>
    )

}

export default ExitSettingsButton
