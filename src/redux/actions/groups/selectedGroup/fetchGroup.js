export const fetchGroupRequest = () => {
    return{
      type: 'FETCH_GROUP_REQUEST'  
    }
}

export const fetchGroupSuccess = group => {
    return{
        type: 'FETCH_GROUP_SUCCESS',
        group: group  
    } 
}

export const fetchGroupFailure = error => {
    return {
        type:'FETCH_GROUP_FAILURE',
        error: error
    } 
}