export const fetchGroupsRequest = () => {
    return{
      type: 'FETCH_GROUPS_REQUEST'  
    }
}

export const fetchGroupsSuccess = groups => {
    return{
        type: 'FETCH_GROUPS_SUCCESS',
        groups: groups  
    } 
}

export const fetchGroupsFailure = error => {
    return {
        type:'FETCH_GROUPS_FAILURE',
        error: error
    } 
}

