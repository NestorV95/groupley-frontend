import { fetchListsRequest,fetchListsSuccess,fetchListsFailure} from '../actions/listsActions'

const initialState = { loading: false, lists: [], error: ''}

const listsReducer = (state=initialState, action)=>{
    switch(action.type){
        case 'FETCH_LISTS_REQUEST':
            return{ ...state , loading: true }

        case 'FETCH_LISTS_SUCCESS':
            return{ ...state, loading: false, lists: action.lists, error: ''}

        case 'FETCH_LISTS_FAILURE':
            return{ ...state, loading: false, lists: [], error: action.error } 
        
        default: 
            return state 
    }
}


export const saveLists = () => async (getState) => {
    const lists = getState().listsState.lists
    const req = {
        method: "POST",
        headers:{'Content-Type':'application/json','Accept':'application/json'},
        body: JSON.stringify(lists)
    }
    await fetch('http://localhost:3000/api/v1/lists',req)
    alert("Success")
}

export const loadLists = () => async (dispatch) => {
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

export default listsReducer