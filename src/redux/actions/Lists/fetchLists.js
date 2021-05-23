export const fetchListsRequest = () => {
    return{
      type: 'FETCH_LISTS_REQUEST'  
    }
}

export const fetchListsSuccess = lists => {
    return{
        type: 'FETCH_LISTS_SUCCESS',
        lists: lists 
    } 
}

export const fetchListsFailure = error => {
    return {
        type:'FETCH_LISTS_FAILURE',
        error: error
    } 
}
