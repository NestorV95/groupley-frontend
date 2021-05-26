export const fetchListRequest = () => {
    return{
      type: 'FETCH_LIST_REQUEST'  
    }
}

export const fetchListSuccess = list => {
    return{
        type: 'FETCH_LIST_SUCCESS',
        list: list
    } 
}

export const fetchListFailure = error => {
    return {
        type:'FETCH_LIST_FAILURE',
        error: error
    } 
}