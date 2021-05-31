import React from 'react'
import {useSelector} from 'react-redux'

import DashboardGroupsTile from './Groups/DashboardGroupsTile'
import DashboardSummaryTile from './Summary/DashboardSummaryTile'

const DashboardTiles = () => {
    const {currentUser} = useSelector(state => state.currentUserState)

    return (
        <div className="win-tiles">
            {currentUser && <DashboardSummaryTile />}
            {currentUser && <DashboardGroupsTile />}
            {/* more tiles tbd */} 
        </div>
    )
}

export default DashboardTiles
