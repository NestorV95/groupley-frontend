import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import joinGroup from '../../../redux/actions/groups/selectedGroup/JoinGroup'

const JoinGroupButton = () => {
    const {selectedGroup} = useSelector(state => state.groupState)
    const dispatch = useDispatch()

    const join = () => {
        dispatch(joinGroup(selectedGroup))
    }
    
    return (
       <button className="group-text group-btn mem-btn" onClick={ () => join() } >Join Group</button>
    )
}

export default JoinGroupButton
