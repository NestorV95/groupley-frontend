import React from 'react'
import {useSelector} from 'react-redux'

import DashboardCurrentGroupTile from './DashboardCurrentGroupTile'
import DashboardGroupsTile from './DashboardGroupsTile'
import DashboardSummaryTile from './DashboardSummaryTile'

const DashboardTiles = () => {
    const {currentUser} = useSelector(state => state.currentUserState)

    return (
        <div className="win-tiles">
            {currentUser && <DashboardCurrentGroupTile />}
            {currentUser && <DashboardGroupsTile />}
            {currentUser && <DashboardSummaryTile />}
            {/* tiles tbd */} 
        </div>
    )
}

export default DashboardTiles
