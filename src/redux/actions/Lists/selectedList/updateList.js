import {fetchListRequest, fetchListSuccess, fetchListFailure} from './fetchList'
import updateLists from './updateLists'

const updateList = log => async (dispatch, getState) => {
    dispatch( fetchListRequest() )
    const state = getState()
    const {selectedGroup} = state.groupState
    const {selectedList} = state.listsState
    
    const req = {
        method: "PATCH",
        headers:{
            'Content-Type':'application/json',
            'Accept':'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(log)
    }

    await fetch(`http://localhost:3000/api/v1/groups/${selectedGroup.id}/lists/${selectedList.id}`,req)
    .then(res=> res.json())
    .then(({list})=>{
        dispatch( fetchListSuccess(list) )
        dispatch( updateLists(list) )
    })
    .catch(error=>{
        dispatch(fetchListFailure(error.message))
    })
}

export default updateList