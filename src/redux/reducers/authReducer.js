const initialState = {
    status: false,
    // token: {
    //     status: null,
    //     valid: null
    // }
}

const authReducer = (state=initialState, action)=>{
    // const {type, status} = action
    switch(action.type){
        case 'AUTH_STATUS':
            return{
                ...state,
                status: action.status
            }
        // case 'TOKEN_STATUS':
        //     return{
        //         ...state,
        //         token: {
        //             ...state.token,
        //             status: action.status
        //         }
        //     }
        // case 'TOKEN_VALID':
        //     return{
        //         ...state,
        //         token: {
        //             ...state.token,
        //             valid: action.valid
        //         }
        //     }
        default: 
            return state 
    }
}

export default authReducer