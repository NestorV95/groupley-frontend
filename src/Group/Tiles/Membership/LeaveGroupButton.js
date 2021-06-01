import React from 'react'
import {useDispatch} from 'react-redux'
import leaveGroup from '../../../redux/actions/groups/selectedGroup/leaveGroup'


const LeaveGroupButton = () => {

    const dispatch = useDispatch()

    const leave = () => {
        dispatch(leaveGroup())
    }

    return (
        <button className="group-text group-btn" onClick={()=>leave()}>leave group</button>
    )
}

export default LeaveGroupButton
