import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import leaveGroup from '../../../redux/actions/groups/selectedGroup/leaveGroup'


const LeaveGroupButton = () => {
    const {selectedGroup} = useSelector(state => state.groupState)
    const dispatch = useDispatch()

    const leave =() => {
        dispatch(leaveGroup(selectedGroup))
    }

    return (
        <button className="group-text group-btn mem-btn" onClick={()=>leave()}>leave group</button>
    )
}

export default LeaveGroupButton
