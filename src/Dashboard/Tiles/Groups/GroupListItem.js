import React from 'react'
import {useDispatch} from 'react-redux'

import loadGroup from '../../../redux/actions/groups/selectedGroup/loadGroup'

const GroupListItem = ({group}) => {
    const dispatch = useDispatch()

    const getGroup = group => {
        dispatch(loadGroup(group))
    }

    return (
        <div>
            <li className="dagrp-li" onClick={()=> getGroup(group)}>{group.name}</li>
        </div>
    )
}

export default GroupListItem
