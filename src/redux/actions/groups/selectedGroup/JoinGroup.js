// import {fetchGroupfetchGroupFailure} from './fetchGroup'

const addGroup = (group) => {
    return{
        type: 'ADD_GROUP',
        group: group
    }
}

const joinGroup = (group) => async (dispatch, getState) => {
    const state = getState()
    const {currentUser} = state.currentUserState

    const newMem = {
        group_id: group.id,
        user_id: currentUser.id
    }

    const req={
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json', 
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(newMem)
    }

    await fetch('http://localhost:3000/api/v1/group_users', req )
    .then(res=>res.json())
    .then(({group_user})=>{
        const {group} = group_user
        dispatch(addGroup(group))
    })

}

export default joinGroup