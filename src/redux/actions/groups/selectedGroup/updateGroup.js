import {fetchGroupRequest, fetchGroupSuccess, fetchGroupFailure} from './fetchGroup'

const updateGroup = log => async (dispatch, getState) => {
    const state = getState()
    console.log(state)
    const {selectedGroup} = state.groupState

    const req={
        method: 'PATCH',
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json', 
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(log)
    }

    await fetch(`http://localhost:3000/api/v1/groups/${selectedGroup.id}`, req )
    .then(res=>res.json())
    .then(({group})=>{
 
        dispatch(fetchGroupRequest())
        dispatch(fetchGroupSuccess(group))
    })
    .catch(error=>{
        dispatch(fetchGroupFailure(error.message))
    })
}

export default updateGroup