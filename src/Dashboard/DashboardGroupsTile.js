import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import selectGroup from '../redux/actions/groups/selectedGroup/selectGroup'
import loadLists from '../redux/actions/Lists/loadLists'

const DashboardGroupsTile = () => {
    const {groups} = useSelector(state => state.groupState)
    const dispatch = useDispatch()

    const getGroup = group => {
        dispatch(selectGroup(group))
        dispatch(loadLists(group))
    }
    return (
        <div>
            {groups.map(group=>{
                    return <li onClick={()=> getGroup(group)}>{group.name}</li>
                })
            }
        </div>
    )
}

export default DashboardGroupsTile
