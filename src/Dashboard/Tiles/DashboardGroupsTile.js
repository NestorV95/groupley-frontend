import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import loadGroup from '../../redux/actions/groups/selectedGroup/loadGroup'


const DashboardGroupsTile = () => {
    const {groups} = useSelector(state => state.groupState)
    const dispatch = useDispatch()

    const getGroup = group => {
        dispatch(loadGroup(group))
    }

    return (
        <div>
            <p>You are currently apart of {groups.length} groups</p>
            {groups && groups.map(group=>{
                    return <li key={group.id} onClick={()=> getGroup(group)}>{group.name}</li>
                })
            }
        </div>
    )
}

export default DashboardGroupsTile
