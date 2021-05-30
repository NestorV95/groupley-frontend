import React from 'react'
import {useSelector} from 'react-redux'

const DashboardSummaryTile = () => {
    const {currentUser} = useSelector(state => state.currentUserState)
    return (
        <div>
            <p>Hello {currentUser['first_name']}, this is where your group summary will go when 
            we're finished building out all of our MVPs </p>
        </div>
    )
}

export default DashboardSummaryTile
