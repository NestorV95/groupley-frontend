// import {fetchGroupfetchGroupFailure} from './fetchGroup'

const joinGroup = () => async (dispatch, getState) => {
    const state = getState()
    const {currentUser} = state.currentUserState
    const {selectedGroup} = state.groupState

    const newMem = {
        group_id: selectedGroup.id,
        user_id: currentUser.id
    }

    console.log(newMem)

    const req={
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json', 
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(newMem)
    }

    console.log(req)

    await fetch('http://localhost:3000/api/v1/group_users', req )
    .then(res=>res.json())
    .then((data)=>{
        console.log(data)
    })
    // .catch(error=>{
    //     dispatch(fetchGroupFailure(error.message))
    // })
}

export default joinGroup