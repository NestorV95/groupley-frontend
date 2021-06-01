import React from 'react'
import {useSelector} from 'react-redux'

import GroupListItem from './GroupListItem'


const DashboardGroupsTile = () => {
    const {groups} = useSelector(state => state.groupState)

    return (
        <div className="dash-tile dash-groups">

            <p className="dagrp-sum">You are currently apart of {groups.length} groups</p>

            <ul className="dagrp-ul">
                {groups && groups.map( group => {
                        return <GroupListItem key={group.id} group={group}/>
                })}    
            </ul>
            
        </div>
    )
}

export default DashboardGroupsTile
