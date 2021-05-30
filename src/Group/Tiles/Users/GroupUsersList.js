import React from 'react'
import {useSelector} from 'react-redux'

import GroupUserTile from './GroupUserTile'

const GroupUsersList = () => {
    const {users} = useSelector(state => state.groupState.selectedGroup)
    
    return (
        <div>
            {users && <p>{users.length} members</p>}
            <div style={gulOuter}>
                <ul style={gulinner}>
                    {users && users.map( user =>{ 
                        return <GroupUserTile key={user.username} user={user}/>
                    })}
                </ul>
            </div>
        </div>
    )
}

const gulOuter = {position: 'relative',display: 'table' ,margin: '0', padding: '0', height:'5rem', borderRadius: '1px solid red'}
const gulinner = {display: 'block', margin: '0', padding:'0' , height: '5rem', width: '15rem' , 
    whiteSpace: 'nowrap', overflow: 'hidden', overflowX: 'auto', listStyleType: 'none'}

export default GroupUsersList
