import React from 'react'
import {useDispatch} from 'react-redux'
import leaveGroup from '../../../redux/actions/groups/selectedGroup/leaveGroup'


const LeaveGroupButton = () => {

    const dispatch = useDispatch()

    const leave = () => {
        dispatch(leaveGroup())
    }

    return (
        <button onClick={()=>leave()}>leave group</button>
    )
}

export default LeaveGroupButton
