

const leaveGroup = () => async ( getState) => {
    const state = getState()
    const {groups} = state.currentUserState.currentUser
    const {selectedGroup} = state.groupState
  
    const groupUser = groups.find(group_user=> group_user['group_id'] === selectedGroup.id)
   

    const req={
        method: 'DELETE',
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json', 
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
    }

    await fetch(`http://localhost:3000/api/v1/group_users/${groupUser.id}`, req )
    .then(res=>res.json())
    
}

export default leaveGroup