import {fetchListRequest, fetchListSuccess, fetchListFailure} from './fetchList'
import addToLists from './addToLists'

const saveList = log => async (dispatch, getState) => {
    dispatch( fetchListRequest() )
    const state = getState()
    const {selectedGroup} = state.groupState
    
    const req = {
        method: "POST",
        headers:{
            'Content-Type':'application/json',
            'Accept':'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(log)
    }

    await fetch(`http://localhost:3000/api/v1/groups/${selectedGroup.id}/lists`,req)
    .then( res => res.json() )
    .then( ( { list } )=>{
        dispatch( fetchListSuccess( list ) )
        dispatch( addToLists( list ) )
    })
    .catch(error=>{
        dispatch(fetchListFailure(error.message))
    })
}

export default saveList