const initialState = {
    isLogged: false,
    token: {
        status: null,
        valid: null
    }
}

const authReducer = (state=initialState, action)=>{
    switch(action.type){
        case 'LOGGED_STATUS':
            return{
                ...state,
                isLogged: action.isLogged
            }
        case 'TOKEN_STATUS':
            return{
                ...state,
                token: {
                    ...state.token,
                    status: action.status
                }
            }
        case 'TOKEN_VALID':
            return{
                ...state,
                token: {
                    ...state.token,
                    valid: action.valid
                }
            }
        default: 
            return state 
    }
}

export default authReducer