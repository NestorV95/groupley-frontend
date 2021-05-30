import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import loadGroup from '../../redux/actions/groups/selectedGroup/loadGroup'
// import loadLists from '../redux/actions/Lists/loadLists'

const DashboardGroupsTile = () => {
    const {groups} = useSelector(state => state.groupState)
    const dispatch = useDispatch()

    const getGroup = group => {
        dispatch(loadGroup(group))
    }

    return (
        <div>
            {groups && groups.map(group=>{
                    return <li onClick={()=> getGroup(group)}>{group.name}</li>
                })
            }
        </div>
    )
}

export default DashboardGroupsTile
