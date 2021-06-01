import React from 'react'

import CurrentDateTime from './CurrentDateTime'
import CurrentGroup from './CurrentGroup'
import Greeting from './Greeting'
import ListsSummary from './ListsSummary'

const DashboardSummaryTile = () => {

    return (

        <div className="dash-text dash-tile dash-sum">

            <CurrentDateTime />
            <Greeting />
            <CurrentGroup />
            <ListsSummary />

        </div>
        
    )
}

export default DashboardSummaryTile
