import React from 'react'
import {useDispatch} from 'react-redux'
import joinGroup from '../redux/actions/groups/selectedGroup/JoinGroup'

const JoinGroupButton = () => {
    const dispatch = useDispatch()

    const join = () => {
        dispatch(joinGroup())
    }
    return (
       <button onClick={()=>join()} >Join Group</button>
    )
}

export default JoinGroupButton
