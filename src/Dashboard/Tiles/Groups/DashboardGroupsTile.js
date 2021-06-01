import React from 'react'
import { useSelector } from 'react-redux'

import GroupListItem from './GroupListItem'


const DashboardGroupsTile = () => {
    const { groups } = useSelector( state => state.groupState )

    return (
        <div className="dash-text dash-tile dash-groups" >

            { groups && <p className="dagrp-sum" >You are currently apart of {groups.length} groups</p> }

            { groups && <ul className="dagrp-ul" >
                { groups.map( group => {
                        return < GroupListItem key={ group.id } group={ group } />
                })}    
            </ul> }
            
        </div>
    )
}

export default DashboardGroupsTile
