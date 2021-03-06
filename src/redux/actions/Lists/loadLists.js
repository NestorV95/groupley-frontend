import { fetchListsRequest,fetchListsSuccess,fetchListsFailure} from './fetchLists'

const loadLists = (group) => async (dispatch) => {
    dispatch(fetchListsRequest())
    const req={
        method: 'GET',
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json', 
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    }

    await fetch(`http://localhost:3000/api/v1/groups/${group.id}/lists`, req)
    .then(res=>res.json())
    .then(data=>{
        
        dispatch(fetchListsSuccess(data))
    })
    .catch(error=>{
        dispatch(fetchListsFailure(error.message))
    })
}

export default loadLists