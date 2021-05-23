import { fetchListsRequest,fetchListsSuccess,fetchListsFailure} from './fetchLists'

const loadLists = () => async (dispatch) => {
    await fetch('http://localhost:3000/api/v1/lists')
    .then(res=>res.json())
    .then(data=>{
        dispatch(fetchListsRequest())
        dispatch(fetchListsSuccess(data))
    })
    .catch(error=>{
        dispatch(fetchListsFailure(error.message))
})
}

export default loadLists