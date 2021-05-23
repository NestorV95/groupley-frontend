const initialState = {
    loading: false,
    currentUser: null,
    error: ''
}

const currentUserReducer = (state=initialState, action)=>{
    switch(action.type){
        case 'FETCH_USER_REQUEST':
            return{ 
                ...state,
                 loading: true 
            }

        case 'FETCH_USER_SUCCESS':
            return{ ...state,
                loading: false,
                currentUser: action.user,
                error: '' 
            }

        case 'FETCH_USER_FAILURE':
            return{ 
                ...state,
                loading: false,
                currentUser: {},
                error: action.error 
            } 
        default: 
            return state 
    }
}

export default currentUserReducer