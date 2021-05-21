
export const fetchUserRequest = () => {
    return{
      type: 'FETCH_USER_REQUEST'  
    }
}

export const fetchUserSuccess = user => {
    return{
        type: 'FETCH_USER_SUCCESS',
        user: user  
    } 
}

export const fetchUserFailure = error => {
    return {
        type:'FETCH_USER_FAILURE',
        error: error
    } 
}