import selectGroup from "./selectGroup"
import {addGroup, editGroups} from "./JoinGroup"

const leaveGroup = (group) => async ( dispatch, getState) => {
    const state = getState()
    const {currentUser} = state.currentUserState

    const {groups} = state.currentUserState.currentUser
  
    const groupUser = groups.find(group_user=> group_user['group_id'] === group.id)
   

    const req={
        method: 'DELETE',
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json', 
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
    }

    await fetch(`http://localhost:3000/api/v1/group_users/${groupUser.id}`, req )
    const update = {
        ...group,
        users: group.users.filter(user => user.id !== currentUser.id) 
    }
        dispatch(editGroups(update))
        dispatch(addGroup(update))
        dispatch(selectGroup(update))
    
}

export default leaveGroup